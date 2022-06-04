const { match } = require('assert');
const TelegramBot = require('node-telegram-bot-api');

const token = '5268516878:AAGE6UpGY6MFX5GVcpY3ITkaue7U--Cdq0o';

const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/echo (.+)/, (msg, match) => 
{
    const chatId = msg.chat.id;
    const resp = match[1];
    console.log(match, resp);
    bot.sendMessage(chatId, resp);
});


bot.on('message', (msg) => 
{
    const text = msg.text;
    const chatId = msg.chat.id;
    
    switch (text) {
        case '/start':
            bot.sendMessage(chatId, 'Hello I\'m a bot write on javaScript i am working with nodeJs jiji'); 
            break;
        default:
            bot.sendMessage(chatId, 'Sorry, I can\'t do nothing for you, dude :(');  
            break;
    }
});

