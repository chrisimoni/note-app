const fs = require('fs'); //The fs module provides an API for interacting with the file system in a manner closely modeled around standard POSIX functions
const _ = require('lodash'); //Lodash makes JavaScript easier by taking the hassle out of working with arrays, numbers, objects, strings, etc.
const yargs = require('yargs'); //Yargs helps you build interactive command line tools by parsing arguments and generating an elegant user interface.

const notes = require('./notes.js');

const titleOptions = {
    describe : 'Title of note',
    demand : true,
    alias : 't'
};

const bodyOptions = {
    describe : 'Body of note',
    demand : true,
    alias : 'b'
};
const argv = yargs
.command('add', 'Add a new note', {
    title : titleOptions,
    body : bodyOptions
})
.command('list', 'List all notes')
.command('read', 'Read a note', {
    title : titleOptions
})
.command('remove', 'Remove a note', {
    title : titleOptions
})
.help()
.argv;
var command = argv._[0];
//console.log("Command", command);
//console.log("Yargs", argv);

if(command === 'add'){
    var note = notes.addNote(argv.title, argv.body);
    if(note) {
        console.log('Note created');
        notes.logNote(note);
    }else {
        console.log('Note title taken');
    }
}else if(command === 'list'){
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) => notes.logNote(note));
}else if(command === 'read') {
    var note = notes.getNote(argv.title);
    if(note) {
        console.log('Note found');
        notes.logNote(note);
    }else {
        console.log('Note not found');
    }
}else if(command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
}else{
    console('Command not recognized');
}
