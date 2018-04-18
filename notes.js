//this file contains functions for creating, reading, listing and removing notes
const fs = require('fs'); //Nodejs module for writing JS files

//function for reading notes
var fetchNotes = () => {
    try {
        //reading from json file
        var noteString = fs.readFileSync('notes-data.json');
        return JSON.parse(noteString);
    } catch (e) {
        return [];
    }
}
//function for saving notes
var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    }

    //Filtering to prevent duplicate titles
    var duplicateNotes = notes.filter((note) => note.title === title);

    if(duplicateNotes.length === 0){
        //pushing the note object to JS array
        notes.push(note);
        //writing to json file
        saveNotes(notes);
        return note;
   
    }
    
};

var getAll = () => {
    return fetchNotes();
};

var getNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title === title);

    return filteredNotes[0];
};

var removeNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);
    //checking and returning true of false if the note was removed 
    return notes.length !== filteredNotes.length;
};

var logNote = (note) => {
    console.log('--');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
};



module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
}
