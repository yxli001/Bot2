require("dotenv").config();
const Discord = require("discord.js");
const { Client, Intents } = require("discord.js");
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS,
    ],
});

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", (msg) => {
    if (msg.author.bot) return;

    if (msg.author.id === "") {
        msg.delete();
    }
});

client.login(process.env.DISCORD_BOT_TOKEN);
