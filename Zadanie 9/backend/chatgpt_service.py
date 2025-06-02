from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import AutoTokenizer, AutoModelForCausalLM
import torch

app = Flask(__name__)
CORS(app)

MODEL_PATH = "models/llama-2-7b-chat"

print("Ładowanie modelu i tokenizera...")
tokenizer = AutoTokenizer.from_pretrained(MODEL_PATH)
model = AutoModelForCausalLM.from_pretrained(MODEL_PATH)

@app.route("/chat", methods=["POST"])
def chat():
    data = request.json
    user_message = data.get("message", "")
    if not user_message:
        return jsonify({"error": "Brak wiadomości"}), 400

    try:
        prompt = f"[INST] {user_message} [/INST]"
        inputs = tokenizer(prompt, return_tensors="pt")
        inputs = inputs.to(model.device)

        with torch.no_grad():
            outputs = model.generate(
                **inputs,
                max_new_tokens=100,
                temperature=0.7,
                top_p=0.95,
                do_sample=True
            )

        response = tokenizer.decode(outputs[0], skip_special_tokens=True)
        answer = response.split("[/INST]")[-1].strip()

        return jsonify({"response": answer})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(port=5009)