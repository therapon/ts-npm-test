var uniqueArray = require('unique-random-array');
var greetingsStrings = require('./greetings.json'); 

module.exports = { 
    greetings: greetingsStrings,
    greet: uniqueArray(greetingsStrings)

}; 
