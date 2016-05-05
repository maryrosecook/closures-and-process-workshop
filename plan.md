# Closures workshop

* concept: closures
* skill: using scientific method to resolve questions about code and using console and scratch program to test hypotheses

* workshop
  * demo

* workshop
  * demo:
    * Show example of code we want to understand (lexical scope)
    * "One way to understand this is using the scientific method"
    * Show scientific method flowchart (seems too diffuse to generate the flowchart with students)
    * Use scientific method with students to understand example
    * Do second closure/lex scope example for reinforcement?
  * worksheet (in pairs):
    * why you need/want to know
      * lexical scope: basic thing about how js vars work that will affect the running of every program that has a function declaration in it
      * closures: understand some of the strange behaviour that can result from functions being able to access the variables created outside themselves
    * include stretch exercises for faster students
  * plenary
    * Any questions
    * Get students to put work on screen

* scientific method: see omnigraffle document

* unanswered questions
  * Is this approach OK?
  * User story? Invent a domain for this?
  * Can this incorporate test writing? Failing tests and students make them pass?
  * What about getting students to write tests as part of their scientific method? Too heavyweight?
  * Generate scientific method with students?

* random thoughts
  * in my language, focus on closed over variables, not closures, because these are what you end up thinking about
  * probably stay away from the fact that closures can access a variable after the variable's scope has terminated and its frame has been popped off the stack.  Too much depth.
  * Probably no variable shadowing.  Too much depth.

* concepts
  * lexical scope
  * callbacks still still have access to closed over variables after their local environment has finished running
  * can create closure with a returned function too
  * closed over variables can change in unexpected ways
    * var changed after closure created
    * several closures using same outer scope
    * if
    * loops (eg of foreach where you want it and looping over a callback where you may not)
  * global vs closed over variable (maybe skip this - hard to get definitive answer on how this is really implemented)
