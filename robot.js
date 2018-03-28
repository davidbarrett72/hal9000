var Botkit = require('botkit');

var controller = Botkit.slackbot({
  debug: false
});

// connect the bot to a stream of messages
controller.spawn({
  token: "xoxb-336690869060-PgzErj1cs7Oqgdg900Uy3Zvv"
}).startRTM()

// give the bot something to listen for.
controller.hears('hello',['direct_message','direct_mention','mention'],function(bot,message) {

  bot.reply(message,'Hello yourself.');

});

