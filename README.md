# Hosted on Heroku: https://evening-caverns-20461.herokuapp.com

## Calculator application using jQuery, Node, and Express

### GET
* logic for the calculator is housed on the Server
* client side will take in the values 
* 2 input text fields a 
* Type of mathematical operation selected using a button on the DOM. 

### POST
* Each of the numerical values and type of mathematical operation will be bundled up in an object 
* Then sent to the server via a POST. 
* Ex: object sent format { x: 3, y: 4, type: Add }

* Once the server receives it, build out 
* Logic was built out to compute the numbers in 1 of 4 different ways. 
* The server computes Addition, Subtraction, Multiplication, and Division. 
* When complete, the answer is sent Back to the client side 
* displayed on the DOM.
* a 'clear' button that resets the whole experience.

## Delay
* Client receives the response from the Server,until the calculation is displayed on the DOM. 
* During the delay, show information that says 'computing' until the 3 second delay has finished.
