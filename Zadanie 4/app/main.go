package main

import (
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
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
	err := db.AutoMigrate(&Product{}, &Category{}, &Cart{}, &Payment{}, &User{})
	if err != nil {
		return
	}

	// Middleware CORS
	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"http://localhost:3000"},
		AllowMethods: []string{echo.GET, echo.POST, echo.PUT, echo.DELETE},
	}))

	const productsId = "/products/:id"
	const cartsId = "/carts/:id"
	const categoriesId = "/categories/:id"
	const paymentsId = "/payments/:id"
	// Endpoints
	e.POST("/products", createProduct)
	e.GET("/products", getProducts)
	e.GET(productsId, getProduct)
	e.PUT(productsId, updateProduct)
	e.DELETE(productsId, deleteProduct)

	e.POST("/carts", createCart)
	e.GET("/carts", getCarts)
	e.GET(cartsId, getCart)
	e.PUT(cartsId, updateCart)
	e.PUT("/carts/:id/clear", clearCartProducts)
	e.DELETE(cartsId, deleteCart)

	e.POST("/categories", createCategory)
	e.GET("/categories", getCategories)
	e.GET(categoriesId, getCategory)
	e.PUT(categoriesId, updateCategory)
	e.DELETE(categoriesId, deleteCategory)

	e.POST("/payments", createPayment)
	e.GET("/payments", getPayments)
	e.GET(paymentsId, getPayment)
	e.PUT(paymentsId, updatePayment)
	e.DELETE(categoriesId, deletePayment)

	e.POST("/register", register)
	e.POST("/login", login)

	// Start serwera
	e.Logger.Fatal(e.Start(":8080"))
}
