var SlackBot = require("slackbots");
var initialchannel = "general";

//privateconfig holds information which can't be stored on github
var config = require("./config/privateconfig.js");


var bot = new SlackBot({
    token: config.token,
    name: "hellobotv2"
});

//START EVENT - execute when you load hellobotv2
bot.on("start", function() {
    bot.postMessageToChannel(initialchannel, "hellobotv2 has started successfully");
    console.log("hellobotv2 has started successfully");

    //DEBUG - a testing method to test new functionality
    testfunctionality
});

//MESSAGE EVENT - When a message is posted
bot.on("message", function(data) {
    if (data.type !== "message") {
        return;
    }

    handleMessage(data.text);
    //DEBUG - log the message data while I'm developing the response
    console.log(data)
});

//handlemessage checks if any message fits the trigger words and if so responds
function handleMessage(message) {
    switch(message) {
        case "hi":
        case "hello":
            sendgreeting("testresponse"); //DEBUG - currently hardcoded to respond in testresponse channel
            break;
        default:
            return;
    }
}

//sendresponse gets a greeting and posts it to the channel you specify
function sendgreeting(channel) {
    var greeting = getGreeting();
    bot.postMessageToChannel(channel, greeting);
}

//getgreeting returns a random greeting
function getGreeting() {
    var greetings = [
        "hello!",
        "hi there!",
        "cheerio!",
        "how do you do!",
        "¡hola!"
    ];
    return greetings[Math.floor(Math.random() * greetings.length)];
}

function testfunctionality() {
    var cname = bot.getChannelById("CDWCBFF3Q");
    console.log(cname);
}