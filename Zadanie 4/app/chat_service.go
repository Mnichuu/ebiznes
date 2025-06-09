package main

import (
	"bytes"
	"encoding/json"
	"io"
	"net/http"

	"github.com/labstack/echo/v4"
)

type GenerateRequest struct {
	Prompt string `json:"prompt"`
}

type OllamaGenerateRequest struct {
	Model  string `json:"model"`
	Prompt string `json:"prompt"`
	Stream bool   `json:"stream"`
}

type OllamaGenerateResponse struct {
	Response string `json:"response"`
	Done     bool   `json:"done"`
}

func chatHandler(c echo.Context) error {
	var req GenerateRequest
	if err := c.Bind(&req); err != nil {
		return c.JSON(http.StatusBadRequest, map[string]string{"error": "Invalid request"})
	}

	ollamaReq := OllamaGenerateRequest{
		Model:  "llama3",
		Prompt: req.Prompt,
		Stream: false,
	}

	reqBody, err := json.Marshal(ollamaReq)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Failed to marshal request"})
	}

	resp, err := http.Post("http://ollama3-1:11434/api/generate", "application/json", bytes.NewReader(reqBody))
	if err != nil {
		return c.JSON(http.StatusBadGateway, map[string]string{"error": "Failed to connect to Ollama"})
	}
	defer resp.Body.Close()

	respBody, err := io.ReadAll(resp.Body)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Failed to read response"})
	}

	var ollamaResp OllamaGenerateResponse
	if err := json.Unmarshal(respBody, &ollamaResp); err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Failed to parse Ollama response"})
	}

	return c.JSON(http.StatusOK, map[string]string{
		"response": ollamaResp.Response,
	})
}
