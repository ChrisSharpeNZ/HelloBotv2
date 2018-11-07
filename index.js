var SlackBot = require("slackbots");
var fs = require('fs');
var initialchannel = "general";

//privateconfig holds information which can't be stored on github
var config = require("./config/privateconfig.js");
var dt = require("./src/datetime.js");

var logfile = './logs/Hellobotv2_' + dt.myDateTime() + '.log'


var bot = new SlackBot({
    token: config.token,
    name: "hellobotv2"
});

//DEBUG - trying to get channels.list to work
//var test1 = (bot.getChannels());
//var test2 = bot.getChannel("general");
//console.log(test1);
//console.log(test2);

//START EVENT - execute when you load hellobotv2
bot.on("start", function() {
    //create a local logfile
    fs.open(logfile,'w',function(err,file){
        if (err) throw err; 
        console.log("Local log file " + logfile + " created");
        console.log("hellobotv2 has started successfully");
        bot.postMessageToChannel(initialchannel, "hellobotv2 has started successfully");
    })

});

//MESSAGE EVENT - When a message is posted
bot.on("message", function(data) {
    if (data.type !== "message") {
        return;
    }

    //log the message to filesystem
    logmessage(data.text);

    //handle the received message
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

function logmessage(message){
    var logentry = dt.myDateTime() + " DEBUG " + "user-message " + message + "\r\n"
    fs.appendFile(logfile,logentry,function(err){})
}