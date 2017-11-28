/*
 * Template for using custom slots. (Define them with curly 
 * braces in the interaction model) 
 */

"use strict";

var Alexa = require("alexa-sdk");

var handlers = {
  'LaunchRequest': function() {
    this.response.speak("Hello, Buddy. Say sup buddy").listen("For gods sake you nimrod; Just say sup buddy"); 
    this.emit(':responseReady');
  },

  'LanguageIntent': function () {
    var myLanguage = this.event.request.intent.slots.language.value; //Look at JSON response to access a slot. A slot is either custom or built-in and can be found in the interaction model
    if (myLanguage == "spanish") {
        this.response.speak("Holla");
    }
    else {
        this.response.speak("You speak " + myLanguage + ". I dont speak " +myLanguage);
    }
    this.emit(':responseReady');
  }
}

exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};