# Deepen your understanding of closures, and improve your process of understanding code

## Demo: 15 mins

I'll take a code sample and demonstrate my process of trying to understand it.  I'll keep a written log of every action I take and every significant thought I have.

Log entries might include:

* Asking a question in my head.
* Thinking of a reason that something is happening.
* Deciding to pursue a goal.
* The goal for a line of code I'm about to write.
* Prioritising a list.
* Finding the value of a variable.

## Workshop: 30 mins

* Split into pairs.  One person is the scientist, the other is the observer.

* The scientist takes Code Sample 1 (below).  They read the question in the comment, and investigate to find an answer.  They investigate by writing and running code.

* As the scientist investigates, they keep a written log of everything they do and every significant thought they have.

* The observer stays silent.  But If they don't understand what the scientist is doing or why they are doing something, they ask the scientist to write more detailed log entries.

* When the scientist has an answer to the question in the comment, they explain it to the observer.

* If the observer isn't satisfied with the answer, they explain why and the scientist continues investigating.

* Once the investigation is over, the pair move onto the next code sample and swap roles.

* Keep going through the code samples.

## Plenary: 15 mins

We'll come back together and discuss the good and less good parts of the processes we use to understand code.

## Code samples

### Code sample 1

```js
var variableA = 0;

function functionA() {
  // can I use variableA here?
};

functionA();
```

### Code sample 2

```js
function functionA() {
  var variableA = 0;
};

functionA();

// can I use variableA here?
```

### Code sample 3

```js
var variableA = 1;

function functionA() {
  variableA = 2;

  // what value does variableA have here?
};

// what value does variableA have here?

functionA();
```

### Code sample 4

```js
var variableA = 1;

function functionA(variableA) {
  // what value does variableA have here?
};

functionA(2);
```

### Code sample 5


had a question about some code
wrote some code to answer the question
tried to isolate the smallest possible test
had an expected outcome that I tested: yes I can
my test was an
ran the code
checked that the code I expected to run ran
checked that my test was a valid test
i have more questions that come from my original question: where are variables available
variable is available in same function that created it
I keep on making really small changes to my code and running my code at every point
I seem to be honing on in the rules of where variables are available, which involves having and answering lots of questions
let me write down my questions:
are variables available in the function that created them? yes

are variables available in a function that is in the same "place" as the variable was created eg
var variable0 = 0;
function function1() {
  variable0;
};
YES!

are variables made inside a function available one step outside the function?

I saw an error message
I checked the line number it said
I read the message
I concluded my test had failed: are variables made inside a function available one step outside the function? NO
