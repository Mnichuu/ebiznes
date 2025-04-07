package main

import (
	"net/http"

	"github.com/labstack/echo/v4"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

// Struktura produktu
type Product struct {
	ID    uint    `json:"id" gorm:"primaryKey"`
	Name  string  `json:"name"`
	Price float64 `json:"price"`
}

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

	// Start serwera
	e.Logger.Fatal(e.Start(":8080"))
}

// Handlers
func createProduct(c echo.Context) error {
	product := new(Product)
	if err := c.Bind(product); err != nil {
		return err
	}
	db.Create(product)
	return c.JSON(http.StatusCreated, product)
}

func getProducts(c echo.Context) error {
	var products []Product
	db.Find(&products)
	return c.JSON(http.StatusOK, products)
}

func getProduct(c echo.Context) error {
	id := c.Param("id")
	var product Product
	if result := db.First(&product, id); result.Error != nil {
		return c.JSON(http.StatusNotFound, result.Error)
	}
	return c.JSON(http.StatusOK, product)
}

func updateProduct(c echo.Context) error {
	id := c.Param("id")
	var product Product
	if result := db.First(&product, id); result.Error != nil {
		return c.JSON(http.StatusNotFound, result.Error)
	}
	if err := c.Bind(&product); err != nil {
		return err
	}
	db.Save(&product)
	return c.JSON(http.StatusOK, product)
}

func deleteProduct(c echo.Context) error {
	id := c.Param("id")
	var product Product
	if result := db.First(&product, id); result.Error != nil {
		return c.JSON(http.StatusNotFound, result.Error)
	}
	db.Delete(&product)
	return c.NoContent(http.StatusNoContent)
}
