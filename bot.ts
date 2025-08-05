import { Bot } from "https://deno.land/x/grammy@v1.36.3/mod.ts";
import { getText } from "./utils/getText.ts";
//import { audioExtractorRouter } from "./routers/audioExtractor.ts";
//import { whisperRouter } from "./routers/whisper.ts";

const bot = new Bot("8494580444:AAGrXf7KnDa_9jXaoJ6GR9pW_gA3KXd2vFM");


// '/start' komutu ile botu başlat 
bot.command("start", (ctx) => {
    const lang = ctx.from?.language_code;
    ctx.reply(getText(lang, "welcome"));
});
//bot.command("start", (ctx) => ctx.reply("🎬 Video Editor Toolkit'e hoş geldin! Dosya gönder veya komut kullan."));

// Bot router’larını bağla
//bot.use(audioExtractorRouter);
//bot.use(whisperRouter);

// Botu çalıştır
bot.start();
console.log("🤖 Bot çalışıyor!");



// Now that you specified how to handle messages, you can start your bot.
// This will connect to the Telegram servers and wait for messages.

// Start the bot.
bot.start();