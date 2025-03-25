package controllers

import javax.inject._
import play.api.mvc._
import play.api.libs.json._
import scala.collection.mutable
import play.api.libs.json._

case class Category(id: Long, name: String)
object Category {
  implicit val categoryFormat: OFormat[Category] = Json.format[Category]
}

@Singleton
class CategoryController @Inject()(val controllerComponents: ControllerComponents) extends BaseController {

  private val categories = mutable.ListBuffer(
    Category(1, "Electronics"),
    Category(2, "Books")
  )

  def getAllCategories: Action[AnyContent] = Action {
    Ok(Json.toJson(categories))
  }

  def getCategoryById(id: Long): Action[AnyContent] = Action {
    categories.find(_.id == id) match {
      case Some(category) => Ok(Json.toJson(category))
      case None           => NotFound(Json.obj("error" -> "Category not found"))
    }
  }

  def addCategory: Action[AnyContent] = Action { implicit request =>
    request.body.asJson.flatMap(_.asOpt[Category]) match {
      case Some(newCategory) =>
        categories += newCategory.copy(id = categories.map(_.id).max + 1)
        Created(Json.toJson(newCategory))
      case None => BadRequest(Json.obj("error" -> "Invalid data"))
    }
  }

  def updateCategory(id: Long): Action[AnyContent] = Action { implicit request =>
    request.body.asJson.flatMap(_.asOpt[Category]) match {
      case Some(updatedCategory) =>
        categories.indexWhere(_.id == id) match {
          case -1 => NotFound(Json.obj("error" -> "Category not found"))
          case index =>
            categories.update(index, updatedCategory.copy(id = id))
            Ok(Json.toJson(categories(index)))
        }
      case None => BadRequest(Json.obj("error" -> "Invalid data"))
    }
  }

  def deleteCategory(id: Long): Action[AnyContent] = Action {
    if (categories.exists(_.id == id)) {
      categories --= categories.filter(_.id == id)
      NoContent
    } else {
      NotFound(Json.obj("error" -> "Category not found"))
    }
  }
}