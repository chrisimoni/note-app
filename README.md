# Note App

This is a simple Nodejs and Javascript note application that allows you to read and write from a file system (a JSON file) with few third-party NPM Modules.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for testing purposes. 


### Usage

* Clone this repo to your computer and extract it to your computer
* Open your terminal and navigate to the directory (make sure you have node installed)
* Type "npm install" on the command prompt to download/install the dependencies
* Type node app.js in the terminal to begin with

### Commands
* To add a note type node app.js add -t="your note title" -b="the body of the note".
* To read a note type node app.js read -t="title of the note to read" 
* To remove a note type "node app.js remove -t="title of note to remove"
* To list all notes type node app.js list


## Built With

* [Nodejs](https://nodejs.org/en/) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine
* Javascrip ES5 and ES6

## Dependencies
* [yargs](https://www.npmjs.com/package/yargs) - Yargs helps you build interactive command line tools, by parsing arguments and generating an elegant user interface.
* [lodash](https://www.npmjs.com/package/lodash) - Lodash is a modern JavaScript utility library delivering modularity, performance & extras

