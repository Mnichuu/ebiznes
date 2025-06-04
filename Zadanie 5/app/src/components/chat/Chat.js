import React, { useState } from "react";
import "./Chat.css";

function Chat() {
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");
    const [error, setError] = useState("");

    const handleSend = async () => {
        setError("");
        setResponse("");

        try {
            const res = await fetch("http://localhost:8080/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ prompt }),
            });

            if (!res.ok) {
                throw new Error("Błąd podczas komunikacji z serwerem");
            }

            const data = await res.json();
            setResponse(data.response);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="chat-container">
            <h2>Chat z botem</h2>
            <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Wpisz swoje pytanie..."
            />
            <button onClick={handleSend}>Wyślij</button>
            {error && <p className="error">{error}</p>}
            {response && <div className="response"><strong>Odpowiedź:</strong> {response}</div>}
        </div>
    );
}

export default Chat;