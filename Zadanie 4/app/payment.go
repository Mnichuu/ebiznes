package main

import (
	"github.com/labstack/echo/v4"
	"net/http"
)

// Payment struktura
type Payment struct {
	ID       uint      `json:"id" gorm:"primaryKey"`
	Products []Product `json:"products" gorm:"many2many:cart_products;"`
}

// Handlers
func createPayment(c echo.Context) error {
	payment := new(Payment)
	if err := c.Bind(payment); err != nil {
		return err
	}
	db.Create(payment)
	return c.JSON(http.StatusCreated, payment)
}

func getPayments(c echo.Context) error {
	var payments []Payment
	db.Preload("Products").Find(&payments)
	return c.JSON(http.StatusOK, payments)
}

func getPayment(c echo.Context) error {
	id := c.Param("id")
	var payment Payment
	if result := db.Preload("Products").First(&payment, id); result.Error != nil {
		return c.JSON(http.StatusNotFound, result.Error)
	}
	return c.JSON(http.StatusOK, payment)
}

func updatePayment(c echo.Context) error {
	id := c.Param("id")
	var payment Payment
	if result := db.First(&payment, id); result.Error != nil {
		return c.JSON(http.StatusNotFound, result.Error)
	}
	if err := c.Bind(&payment); err != nil {
		return err
	}
	db.Save(&payment)
	return c.JSON(http.StatusOK, payment)
}

func deletePayment(c echo.Context) error {
	id := c.Param("id")
	var payment Payment
	if result := db.First(&payment, id); result.Error != nil {
		return c.JSON(http.StatusNotFound, result.Error)
	}
	db.Delete(&payment)
	return c.NoContent(http.StatusNoContent)
}
