import io.ktor.client.*
import io.ktor.client.engine.cio.*
import io.ktor.client.request.*
import io.ktor.client.statement.*
import io.ktor.http.*
import kotlinx.coroutines.*
import java.io.FileInputStream
import java.util.Properties


fun loadProperties(): Properties {
    val properties = Properties().apply {
        load(FileInputStream("src/main/resources/config.properties"))
    }
    return properties
}

fun main() = runBlocking {
    val properties = loadProperties()
    val botToken = properties.getProperty("BOT_TOKEN") ?: throw Exception("BOT_TOKEN not found in config.properties")
    val channelId = properties.getProperty("CHANNEL_ID") ?: throw Exception("CHANNEL_ID not found in config.properties")

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
