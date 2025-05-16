package main

import (
	"github.com/labstack/echo/v4"
	"net/http"
)

func register(c echo.Context) error {
	u := new(User)
	if err := c.Bind(u); err != nil {
		return err
	}

	if result := db.Create(u); result.Error != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{
			"message": "Failed to register user",
		})
	}

	return c.JSON(http.StatusCreated, map[string]string{
		"message": "User registered successfully",
	})
}
