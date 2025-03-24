package controllers

import javax.inject._
import play.api.mvc._
import play.api.libs.json._

import scala.collection.mutable

case class Product(id: Long, name: String, price: Double)

object Product {
  implicit val productFormat: OFormat[Product] = Json.format[Product]
}

@Singleton
class ProductController @Inject()(val controllerComponents: ControllerComponents) extends BaseController {

  private val products = mutable.ListBuffer(
    Product(1, "Laptop", 3000.0),
    Product(2, "Telefon", 2000.0)
  )

  def getAllProducts: Action[AnyContent] = Action {
    Ok(Json.toJson(products))
  }

  def getProductById(id: Long): Action[AnyContent] = Action {
    products.find(_.id == id) match {
      case Some(product) => Ok(Json.toJson(product))
      case None          => NotFound(Json.obj("error" -> "Produkt nie znaleziony"))
    }
  }

  def addProduct: Action[AnyContent] = Action { implicit request =>
    request.body.asJson.flatMap(_.asOpt[Product]) match {
      case Some(newProduct) =>
        products += newProduct.copy(id = products.map(_.id).max + 1)
        Created(Json.toJson(newProduct))
      case None => BadRequest(Json.obj("error" -> "Błędne dane"))
    }
  }

  def updateProduct(id: Long): Action[AnyContent] = Action { implicit request =>
    request.body.asJson.flatMap(_.asOpt[Product]) match {
      case Some(updatedProduct) =>
        products.indexWhere(_.id == id) match {
          case -1 => NotFound(Json.obj("error" -> "Produkt nie znaleziony"))
          case index =>
            products.update(index, updatedProduct.copy(id = id))
            Ok(Json.toJson(products(index)))
        }
      case None => BadRequest(Json.obj("error" -> "Błędne dane"))
    }
  }

  def deleteProduct(id: Long): Action[AnyContent] = Action {
    if (products.exists(_.id == id)) {
      products --= products.filter(_.id == id)
      NoContent
    } else {
      NotFound(Json.obj("error" -> "Produkt nie znaleziony"))
    }
  }
}
