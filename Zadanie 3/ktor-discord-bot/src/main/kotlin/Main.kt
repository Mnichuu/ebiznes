import io.ktor.client.*
import io.ktor.client.engine.cio.*
import kotlinx.coroutines.*
import java.io.FileInputStream
import java.util.Properties

val properties = loadProperties()
val botToken = properties.getProperty("BOT_TOKEN") ?: throw Exception("BOT_TOKEN not found in config.properties")
val channelId = properties.getProperty("CHANNEL_ID") ?: throw Exception("CHANNEL_ID not found in config.properties")
val botId = properties.getProperty("BOT_ID") ?: throw Exception("BOT_ID not found in config.properties")

var lastMessageId: String? = null

fun loadProperties(): Properties {
    val properties = Properties().apply {
        load(FileInputStream("src/main/resources/config.properties"))
    }
    return properties
}

suspend fun main() {
    System.setProperty("file.encoding", "UTF-8")

    sendMesseges()
    getMesseges()
}

suspend fun sendMesseges() {
    val client = HttpClient(CIO)
    val discordService = DiscordService(client, botToken, channelId)
    try {
        discordService.sendMessage("Cześć, jestem botem z Kotlina!")
        delay(5000)
    } catch (e: Exception) {
        println("Błąd podczas wysyłania wiadomości: ${e.message}")
        delay(5000)
    }
}

suspend fun getMesseges() {
    val client = HttpClient(CIO)
    val discordService = DiscordService(client, botToken, channelId)

    while (true) {
        try {
            val messages = discordService.getMessages(lastMessageId)

            if (messages.isNotEmpty()) {
                messages.forEach { message ->
                    val fMessage = messages.first()
                    if (fMessage.content?.contains(botId) == true) {
                        println("Wiadomość do bota: Content: ${fMessage.content}, Author: ${fMessage.author.username}#${fMessage.author.discriminator}, Message ID: ${fMessage.messageId}")
                    }
                    lastMessageId = fMessage.messageId
                }
            }
            delay(5000)
        } catch (e: Exception) {
            println("Błąd podczas pobierania wiadomości: ${e.message}")
            delay(5000)
        }
    }
}