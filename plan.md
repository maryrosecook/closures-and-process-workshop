# Closures workshop

* open questions
  * User story? Invent a domain for this?
  * Can this incorporate test writing? Failing tests and students make them pass?

* concept: closures
* skill: using scientific method to resolve questions about code and using console and scratch program to test hypotheses

* workshop
  * why you need/want to know
    * lexical scope: basic thing about how js vars work that will affect the running of every program that has a function declaration in it
    * closures: understand some of the strange behaviour that can result from functions being able to access the variables created outside themselves
  * demo:
    * Show or generate flowchart of scientific method
    * Show a closure or example of lexical scope in action (maybe non-trivial so there's enough of a scientific process to get our teeth into).
    * Use scientific method to understand it
      * Get students to suggest hypotheses, put them all on the board
      * Get them to choose a most likely one?
      * Get them to think up a test that will disprove it.
      * Run the test (either in console, or actual file).
      * Repeat if necessary
    * Do second closure/lex scope example for reinforcement?
  * worksheet (in pairs):
    * include stretch exercises for faster students
  * plenary
    * Any questions
    * Get students to put work on screen

* scientific method (show as flow chart?)
  * I discover that I don't understand why something happens
  * I phrase what I don't understand as a question.
  * I think of the most likely answer.
  * I test my answer.
  * If my tests produce the results I expect, I accept the answer.
  * If not, I think up the new most likely answer to my question and test that

* points that I might be able to highlight in the scientific method:
  * Might need multiple tests.
  * Can find evidence supporting answer, but that doesn't mean its right.
  * Can use results of tests to guide the creation and prioritisation of answers.

* in my language, focus on closed over variables, not closures, because these are what you end up thinking about

* probably stay away from the fact that closures can access a variable after the variable's scope has terminated and its frame has been popped off the stack.  Too much depth.

* concepts
  * lexical scope
  * shadowing?
  * callbacks can use closed over vars (will touch on async execution flow)
  * returned functions can use closed over vars
  * closed over variables can change in unexpected ways
    * var changed after closure created
    * several closures using same outer scope
    * loops (eg of foreach where you want it and looping over a callback where you may not)
  * variables being available after their local environment has finished running
  * global vs closed over variable (maybe skip this - hard to get definitive answer on how this is really implemented)
