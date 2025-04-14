import io.ktor.client.HttpClient
import io.ktor.client.request.*
import io.ktor.client.statement.*
import io.ktor.http.ContentType
import io.ktor.http.HttpHeaders
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.jsonArray
import kotlinx.serialization.json.jsonObject
import kotlinx.serialization.json.jsonPrimitive

class DiscordService(private val client: HttpClient, private val botToken: String, private val channelId: String) {

    suspend fun getMessages(after: String? = null): List<DiscordMessage> {
        val response: HttpResponse = client.get("https://discord.com/api/v10/channels/$channelId/messages") {
            header(HttpHeaders.Authorization, "Bot $botToken")
            parameter("limit", 1)
            if (after != null) {
                parameter("after", after)
            }
        }

        val responseBody = response.bodyAsText()
        val messagesJsonArray = Json.parseToJsonElement(responseBody).jsonArray

        return messagesJsonArray.map { jsonElement ->
            val messageJsonObject = jsonElement.jsonObject
            val content = messageJsonObject["content"]?.jsonPrimitive?.content
            val authorJsonObject = messageJsonObject["author"]?.jsonObject
            val username = authorJsonObject?.get("username")?.jsonPrimitive?.content ?: "Unknown"
            val discriminator = authorJsonObject?.get("discriminator")?.jsonPrimitive?.content ?: "0000"
            val messageId = messageJsonObject["id"]?.jsonPrimitive?.content ?: "0"

            DiscordMessage(content, DiscordAuthor(username, discriminator), messageId)
        }
    }

    suspend fun sendMessage(content: String) {
        val response: HttpResponse = client.post("https://discord.com/api/v10/channels/$channelId/messages") {
            header(HttpHeaders.Authorization, "Bot $botToken")
            header(HttpHeaders.ContentType, ContentType.Application.Json.toString())
            setBody("""{"content": "$content"}""")
        }
        println("Wysłano wiadomość. Status: ${response.status}")
    }
}