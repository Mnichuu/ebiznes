package main

import (
	"bytes"
	"encoding/json"
	"io"
	"net/http"

	"github.com/labstack/echo/v4"
)

type ChatRequest struct {
	Message string `json:"message"`
}

type OllamaMessage struct {
	Role    string `json:"role"`
	Content string `json:"content"`
}

type OllamaRequest struct {
	Model    string          `json:"model"`
	Messages []OllamaMessage `json:"messages"`
	Stream   bool            `json:"stream"`
}

type OllamaResponse struct {
	Message OllamaMessage `json:"message"`
}

func chatHandler(c echo.Context) error {
	var chatReq ChatRequest
	if err := c.Bind(&chatReq); err != nil {
		return c.JSON(http.StatusBadRequest, map[string]string{"error": "Invalid request"})
	}

	ollamaReq := OllamaRequest{
		Model:  "llama3",
		Stream: false,
		Messages: []OllamaMessage{
			{Role: "user", Content: chatReq.Message},
		},
	}

	reqBody, err := json.Marshal(ollamaReq)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Failed to marshal request"})
	}

	resp, err := http.Post("http://localhost:11434/api/chat", "application/json", bytes.NewReader(reqBody))
	if err != nil {
		return c.JSON(http.StatusBadGateway, map[string]string{"error": "Failed to connect to Ollama"})
	}
	defer resp.Body.Close()

	respBody, err := io.ReadAll(resp.Body)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Failed to read response from Ollama"})
	}

	var ollamaResp OllamaResponse
	if err := json.Unmarshal(respBody, &ollamaResp); err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Failed to parse response from Ollama"})
	}

	return c.JSON(http.StatusOK, map[string]string{
		"response": ollamaResp.Message.Content,
	})
}
