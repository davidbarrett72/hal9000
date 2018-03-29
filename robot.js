var Botkit = require('botkit');
require('dotenv').config();

var controller = Botkit.slackbot({
  debug: false
});

// connect the bot to a stream of messages
controller.spawn({
  token: process.env.SLACK_TOKEN
}).startRTM()

// give the bot something to listen for.
controller.hears('hello',['direct_message','direct_mention','mention'],function(bot,message) {

  bot.reply(message,'Hello yourself.');

});

