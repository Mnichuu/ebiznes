package main

import (
	"github.com/labstack/echo/v4"
	"net/http"
)

// Category struktura
type Category struct {
	ID       uint      `json:"id" gorm:"primaryKey"`
	Name     string    `json:"name"`
	Products []Product `json:"products"`
}

// Handlers
func createCategory(c echo.Context) error {
	category := new(Category)
	if err := c.Bind(category); err != nil {
		return err
	}
	db.Create(category)
	return c.JSON(http.StatusCreated, category)
}

func getCategories(c echo.Context) error {
	var categories []Category
	db.Preload("Products").Find(&categories)
	return c.JSON(http.StatusOK, categories)
}

func getCategory(c echo.Context) error {
	id := c.Param("id")
	var category Category
	if result := db.Preload("Products").First(&category, id); result.Error != nil {
		return c.JSON(http.StatusNotFound, result.Error)
	}
	return c.JSON(http.StatusOK, category)
}

func updateCategory(c echo.Context) error {
	id := c.Param("id")
	var category Category
	if result := db.First(&category, id); result.Error != nil {
		return c.JSON(http.StatusNotFound, result.Error)
	}
	if err := c.Bind(&category); err != nil {
		return err
	}
	db.Save(&category)
	return c.JSON(http.StatusOK, category)
}

func deleteCategory(c echo.Context) error {
	id := c.Param("id")
	var category Category
	if result := db.First(&category, id); result.Error != nil {
		return c.JSON(http.StatusNotFound, result.Error)
	}
	db.Delete(&category)
	return c.NoContent(http.StatusNoContent)
}
