package main

import (
	"github.com/labstack/echo/v4"
	"net/http"
)

type User struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

func login(c echo.Context) error {
	u := new(User)
	if err := c.Bind(u); err != nil {
		return err
	}

	if u.Email == "admin@admin.pl" && u.Password == "admin" {
		return c.JSON(http.StatusOK, map[string]string{
			"token": "example-jwt-token",
		})
	}

	return c.JSON(http.StatusUnauthorized, map[string]string{
		"message": "Invalid credentials",
	})
}
