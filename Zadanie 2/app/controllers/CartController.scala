package controllers

import javax.inject._
import play.api.mvc._
import play.api.libs.json._
import scala.collection.mutable

case class Cart(id: Long, products: List[Product])
object Cart {
  implicit val cartFormat: OFormat[Cart] = Json.format[Cart]
}

@Singleton
class CartController @Inject()(val controllerComponents: ControllerComponents) extends BaseController {

  private val carts = mutable.ListBuffer(
    Cart(1, List(Product(1, "Laptop", 3000.0))),
    Cart(2, List(Product(2, "Telefon", 2000.0)))
  )

  def getAllCarts: Action[AnyContent] = Action {
    Ok(Json.toJson(carts))
  }

  def getCartById(id: Long): Action[AnyContent] = Action {
    carts.find(_.id == id) match {
      case Some(cart) => Ok(Json.toJson(cart))
      case None       => NotFound(Json.obj("error" -> "Cart not found"))
    }
  }

  def addCart: Action[AnyContent] = Action { implicit request =>
    request.body.asJson.flatMap(_.asOpt[Cart]) match {
      case Some(newCart) =>
        carts += newCart.copy(id = carts.map(_.id).max + 1)
        Created(Json.toJson(newCart))
      case None => BadRequest(Json.obj("error" -> "Invalid data"))
    }
  }

  def updateCart(id: Long): Action[AnyContent] = Action { implicit request =>
    request.body.asJson.flatMap(_.asOpt[Cart]) match {
      case Some(updatedCart) =>
        carts.indexWhere(_.id == id) match {
          case -1 => NotFound(Json.obj("error" -> "Cart not found"))
          case index =>
            carts.update(index, updatedCart.copy(id = id))
            Ok(Json.toJson(carts(index)))
        }
      case None => BadRequest(Json.obj("error" -> "Invalid data"))
    }
  }

  def deleteCart(id: Long): Action[AnyContent] = Action {
    if (carts.exists(_.id == id)) {
      carts --= carts.filter(_.id == id)
      NoContent
    } else {
      NotFound(Json.obj("error" -> "Cart not found"))
    }
  }
}