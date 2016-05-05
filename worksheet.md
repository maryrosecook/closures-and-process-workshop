# Deepen your understanding of closures, and improve your process for understanding code

## Setup: 5 mins

* If you haven't got node installed, run `brew install node`.

* Create a file called `investigate.js` and put this code in it:

```
console.log("hello!");
```

* Run `node investigate.js`.  You should see `hello!` written to the console.

* Create a file called `log.txt` and save it.

* Optional, but recommended.  Move your windows around so you have `log.txt`, `investigate.js` and your terminal on screen at the same time.

## Demo: 15 mins

I'll take the code sample below and demonstrate my process of trying to answer the question in the comment.  I'll keep a written log.  Each log entry will have this format:

* What I will do:
* Why:

```
// What output does this code produce and why?

function bar() {
  return foo;
  foo = 10;
  function foo() {}
  var foo = '11';
};

console.log(bar());
```

## Workshop: 30 mins

* Split into pairs.  One person is the scientist, the other is the observer.

* The scientist pastes Code Sample 1 (below) into `investigate.js`.  They try to answer the question in the comment.  They investigate by writing and running code.

* As the scientist investigates, they keep a written log.  Each log entry has this format:

What I will do:
Why:

* The observer doesn't join in with the investigation.  But If they don't understand what the scientist is doing or why they are doing something, they ask the scientist to write more detailed log entries.

* When the scientist has an answer to the question in the comment, they explain it to the observer.

* If the observer isn't satisfied with the answer, they explain why and the scientist continues investigating.

* Once the investigation is over, the pair swap roles and move onto the next code sample.

* Do the code samples in order.  They build on each other. It's fine not to make it through all of them.

## Plenary: 15 mins

We'll come back together, collect some of our log entries on the board and discuss the good and less good parts of the processes we use to understand code.

## Code samples

### Code sample 1

```js
var variableA = 0;

function functionA() {
  // Can I use variableA here? Why?
};

functionA();
```

### Code sample 2

```js
function functionA() {
  var variableA = 0;
};

functionA();

// Can I use variableA here? Why?
```

### Code sample 3

```js
var variableA = 1;

function functionA() {
  variableA = 2;

  // What value does variableA have here? Why?
};

// What value does variableA have here? Why?

functionA();
```

### Code sample 4

```js
var variableA = 1;

function functionA(variableA) {
  // What value does variableA have here? Why?
};

functionA(2);
```

### Code sample 5


### Last code sample

```
var http = require('http');

var urls = ["google.com",
            "blah.doesntexist"];

function makeRequests() {
  var errors = 0;

  for (var i = 0; i < urls.length; i++) {
    http.get({ host: urls[i] }, function(resp){
      console.log("Successful request to " + urls[i]);
    }).on("error", function(e){
      errors = errors + 1;
      console.log("Failed request to " + urls[i]);
    });
  }
};

makeRequests();
```
