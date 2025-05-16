package main

import (
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var db *gorm.DB
var err error

//jakaś zmiana
func main() {
	// Inicjalizacja Echo
	e := echo.New()

	// Inicjalizacja gorm i SQLite
	db, err = gorm.Open(sqlite.Open("test.db"), &gorm.Config{})
	if err != nil {
		e.Logger.Fatal(err)
	}

	// Migracja schema
	err := db.AutoMigrate(&Product{}, &Category{}, &Cart{}, &Payment{})
	if err != nil {
		return
	}

	// Middleware CORS
	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"http://localhost:3000"},
		AllowMethods: []string{echo.GET, echo.POST, echo.PUT, echo.DELETE},
	}))

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
	e.PUT("/carts/:id/clear", clearCartProducts)
	e.DELETE("/carts/:id", deleteCart)

	e.POST("/categories", createCategory)
	e.GET("/categories", getCategories)
	e.GET("/categories/:id", getCategory)
	e.PUT("/categories/:id", updateCategory)
	e.DELETE("/categories/:id", deleteCategory)

	e.POST("/payments", createPayment)
	e.GET("/payments", getPayments)
	e.GET("/payments/:id", getPayment)
	e.PUT("/payments/:id", updatePayment)
	e.DELETE("/payments/:id", deletePayment)

	// Start serwera
	e.Logger.Fatal(e.Start(":8080"))
}
