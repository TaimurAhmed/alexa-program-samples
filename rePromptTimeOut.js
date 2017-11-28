
/*You can provide an optional string as an argument to 
 *the .listen() method, which will be used by Alexa to 
 *reprompt the user if no response was detected.
 */
"use strict";

//Include alexa SDK
var Alexa = require("alexa-sdk");

// The handlers object tells Alexa how to handle various actions
var handlers = {
  "HelloIntent": function () {//response.speak and .emit method
    this.response.speak("Hello, Buddy. Say sup buddy").listen("For gods sake you nimrod; Just say sup buddy"); 
    this.emit(':responseReady');
  },
  "LaunchRequest": function () { //When user invokes the skill with invocation name but without command mapping
    this.response.speak("Welcome to buddy bot"); 
    this.emit(':responseReady');
  }
};

// This is the function that AWS Lambda calls every time Alexa uses your skill.
exports.handler = function(event, context, callback){
  // Set up the Alexa object
  var alexa = Alexa.handler(event, context);
    // Register Handlers
    alexa.registerHandlers(handlers);
    // Start our Alexa code
    alexa.execute();
};