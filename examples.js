// EXAMPLE 1

// probes:
// * question: you can use variable0, even though it was created outside function1. what rules govern this behaviour? let's create hypotheses and test them to understand these rules
// might get through: if/loops, outer inner reverse... but have worksheet questions on them all

function function1() {
  var variable0 = 0;
};

variable0;

function1();

// EXAMPLE 2

// var http = require('http');

// var urls = ["google.com",
//             "blah.doesntexist"];

// function makeRequests() {
//   var errors = 0;

//   for (var i = 0; i < urls.length; i++) {
//     http.get({ host: urls[i] }, function(resp){
//       console.log("Successful request to " + urls[i]);
//     }).on("error", function(e){
//       errors = errors + 1;
//       console.log("Failed request to " + urls[i]);
//     });
//   }
// };

// makeRequests();
