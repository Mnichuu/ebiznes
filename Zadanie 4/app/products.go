package main

import (
	"github.com/labstack/echo/v4"
	"gorm.io/gorm"
	"net/http"
	"strconv"
)

// Product struktura
type Product struct {
	ID         uint     `json:"id" gorm:"primaryKey"`
	Name       string   `json:"name"`
	Price      float64  `json:"price"`
	CategoryID uint     `json:"category_id"`
	Category   Category `json:"category"`
}

// ByCategory Scope
func ByCategory(categoryID uint) func(db *gorm.DB) *gorm.DB {
	return func(db *gorm.DB) *gorm.DB {
		return db.Where("category_id = ?", categoryID)
	}
}

// ByPriceRange Scope
func ByPriceRange(minPrice, maxPrice float64) func(db *gorm.DB) *gorm.DB {
	return func(db *gorm.DB) *gorm.DB {
		return db.Where("price BETWEEN ? AND ?", minPrice, maxPrice)
	}
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
	categoryIDStr := c.QueryParam("category_id")
	minPriceStr := c.QueryParam("min_price")
	maxPriceStr := c.QueryParam("max_price")

	query := db

	if categoryIDStr != "" {
		categoryID, err := strconv.ParseUint(categoryIDStr, 10, 32)
		if err == nil {
			query = query.Scopes(ByCategory(uint(categoryID)))
		}
	}

	if minPriceStr != "" && maxPriceStr != "" {
		minPrice, err1 := strconv.ParseFloat(minPriceStr, 64)
		maxPrice, err2 := strconv.ParseFloat(maxPriceStr, 64)
		if err1 == nil && err2 == nil {
			query = query.Scopes(ByPriceRange(minPrice, maxPrice))
		}
	}

	query.Find(&products)
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
