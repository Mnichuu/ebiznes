import io.ktor.client.*
import io.ktor.client.engine.cio.*
import io.ktor.client.request.*
import io.ktor.client.statement.*
import io.ktor.http.*
import kotlinx.coroutines.*

fun main() = runBlocking {
    val botToken = "Bot ***"
    val channelId = "***"

    val client = HttpClient(CIO)

    val response: HttpResponse = client.post("https://discord.com/api/v10/channels/$channelId/messages") {
        headers {
            append(HttpHeaders.Authorization, botToken)
            append(HttpHeaders.ContentType, "application/json")
        }
        setBody("""{"content": "Cześć, jestem botem z Kotlina!"}""")
    }

    println("Response status: ${response.status}")
    client.close()
}
