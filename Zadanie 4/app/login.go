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

	var dbUser User
	if result := db.Where("email = ?", u.Email).First(&dbUser); result.Error != nil {
		return c.JSON(http.StatusUnauthorized, map[string]string{
			"message": "Invalid credentials",
		})
	}

	if u.Password != dbUser.Password {
		return c.JSON(http.StatusUnauthorized, map[string]string{
			"message": "Invalid credentials",
		})
	}

	return c.JSON(http.StatusOK, map[string]string{
		"token": "example-jwt-token",
	})
}
