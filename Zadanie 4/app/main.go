package main

import (
	"github.com/labstack/echo/v4"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var db *gorm.DB
var err error

func main() {
	// Inicjalizacja Echo
	e := echo.New()

	// Inicjalizacja gorm i SQLite
	db, err = gorm.Open(sqlite.Open("test.db"), &gorm.Config{})
	if err != nil {
		e.Logger.Fatal(err)
	}

	// Migracja schema
	err := db.AutoMigrate(&Product{})
	if err != nil {
		return
	}

	// Endpoints
	e.POST("/products", createProduct)
	e.GET("/products", getProducts)
	e.GET("/products/:id", getProduct)
	e.PUT("/products/:id", updateProduct)
	e.DELETE("/products/:id", deleteProduct)

	e.POST("/carts", createCart)
	e.GET("/carts", getCarts)
	e.GET("/carts/:id", getCart)
	e.PUT("/carts/:id", updateCart)
	e.DELETE("/carts/:id", deleteCart)

	// Start serwera
	e.Logger.Fatal(e.Start(":8080"))
}
