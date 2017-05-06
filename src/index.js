var uniqueArray = require('unique-random-array');
var greetingsStrings = require('./greetings.json'); 
var getRandomGreeting = uniqueArray(greetingsStrings);

module.exports = { 
    greetings: greetingsStrings,
    greet: uniqueArray(greetingsStrings),
    greetWithSuffix: greetSuffix

};

function greetSuffix(suffix) { 
    var tmp = getRandomGreeting();
    return tmp + ', ' + suffix; 
} 


/* forcing a new feature build */
/* forcing a docs only build*/
/* new major version */
