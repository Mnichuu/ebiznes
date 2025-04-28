package main

import (
	"github.com/labstack/echo/v4"
	"net/http"
)

// Cart struktura
type Cart struct {
	ID       uint      `json:"id" gorm:"primaryKey"`
	Products []Product `json:"products" gorm:"many2many:cart_products;"`
}

// Handlers
func createCart(c echo.Context) error {
	cart := new(Cart)
	if err := c.Bind(cart); err != nil {
		return err
	}
	db.Create(cart)
	return c.JSON(http.StatusCreated, cart)
}

func getCarts(c echo.Context) error {
	var carts []Cart
	db.Preload("Products").Find(&carts)
	return c.JSON(http.StatusOK, carts)
}

func getCart(c echo.Context) error {
	id := c.Param("id")
	var cart Cart
	if result := db.Preload("Products").First(&cart, id); result.Error != nil {
		return c.JSON(http.StatusNotFound, result.Error)
	}
	return c.JSON(http.StatusOK, cart)
}

func updateCart(c echo.Context) error {
	id := c.Param("id")
	var cart Cart
	if result := db.First(&cart, id); result.Error != nil {
		return c.JSON(http.StatusNotFound, result.Error)
	}
	if err := c.Bind(&cart); err != nil {
		return err
	}
	db.Save(&cart)
	return c.JSON(http.StatusOK, cart)
}

func clearCartProducts(c echo.Context) error {
	id := c.Param("id")
	var cart Cart

	if result := db.First(&cart, id); result.Error != nil {
		return c.JSON(http.StatusNotFound, result.Error)
	}

	if err := db.Model(&cart).Association("Products").Clear(); err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Failed to clear products"})
	}

	return c.JSON(http.StatusOK, cart)
}

func deleteCart(c echo.Context) error {
	id := c.Param("id")
	var cart Cart
	if result := db.First(&cart, id); result.Error != nil {
		return c.JSON(http.StatusNotFound, result.Error)
	}
	db.Delete(&cart)
	return c.NoContent(http.StatusNoContent)
}
