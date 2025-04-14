data class DiscordMessage(
    val content: String? = null,
    val author: DiscordAuthor,
    val messageId: String
)

data class DiscordAuthor(
    val username: String,
    val discriminator: String
)