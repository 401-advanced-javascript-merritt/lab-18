![CF](http://i.imgur.com/7v5ASc8.png) LAB 18
=================================================

## Lab 18
### Chris Merritt
### Links and Resources

* [PR]([![Build Status](https://www.travis-ci.com/401-advanced-javascript-merritt/lab-18.svg?branch=master)](https://www.travis-ci.com/401-advanced-javascript-merritt/lab-18))

#### Documentation

* [jsdoc](docs/index.html)

### Modules

* app.js:
  * readIn:
    Reads a file and returns a promise.

  * writeOut:
    Write to a file and return a promise.
    
  * toUpper:
    Change a string to uppercase then a Buffer.
    
  * alterFile:
    Function to wrap all the promises and run the function. Writes to the client on completion or on error.

* logger.js:
  * Listen for file-error and file-save then log them.

* server.js:
  * Start a socket.io server, then listen for file-error and file-save.


### Setup
#### `.env` requirements
* `npm i`
* `PORT` - assign a port number
* `MONGODB_URI` - URL to the running mongo instance/db
#### Running the app
* `npm app.js files/test.txt`
* `nodemon logger.js`
* `nodemon server.js`

#### UML
