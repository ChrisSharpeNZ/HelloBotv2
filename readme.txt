//v1.0.2 Release notes

 * HelloBotv2 now logs any message written into the slack channel

 This feature is just to test the fs skills, but is now complete!

/////////////////////////////

//v1.0.1 Release notes

I've added a log directory which is generated with the current time

This is in preparation for the next release which will log the text which is written in slack

It's not a useful function, but one to practice my "fs" skills :)

/////////////////////////////

https://github.com/ChrisSharpeNZ/HelloBotv2.git

v1.0.0

ALRIGHT! We have a working basic server! It uses privateconfig.js which has to be stored locally.

If you lose it you can create a new ./config/privateconfig.js with the following text.

//
module.exports = {"token": "[SLACKTOKEN]"};
//

<<<<<<< HEAD
SLACKTOKEN is retrieved from slack workspace under CUSTOM INTEGRATIONS > BOTS > EDIT CONFIGURATION > API TOKEN
=======
SLACKTOKEN is retrieved from slack workspace under CUSTOM INTEGRATIONS > BOTS > EDIT CONFIGURATION > API TOKEN
>>>>>>> 0d2b229bda85140d58d229fdb428f134e3e39509
