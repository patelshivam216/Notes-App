const fs=require('fs');
const chalk = require('chalk')


const getNote = function() {
  return 'Your Notes...'
}

const listNotes = function() {
    const notes = loadNotes();
    notes.forEach(function(note){
     console.log(chalk.green(note.title));
    })
 }

const addNote = function(title,body){
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function(note){
        return notes.title===title;
    })
    // filter return array 
    // find return one only objext if it is

    const duplicateNote = notes.find((note)=>{
        return note.title===title;
    })

    // duplicateNote === undefined , is also work in if
    
    if(!duplicateNote){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes);  
        console.log(chalk.green('Note added!'))
    }else{
        console.log(chalk.red('Title is taken!'))
    }



}

const readNotes = function(title){
    const notes = loadNotes();
    const noteToRead = notes.find(function (note){
        return note.title===title;
    })

    if(noteToRead != undefined){
       console.log(chalk.green(noteToRead.title) + " : " + noteToRead.body);
    
       
    }else{
        console.log(chalk.red('Note is NOT found!'))
    }
}

const removeNote = function(title){
    const notes = loadNotes();

    
    // in noteToBeremove has notes who are not matching means 
    const noteToKeep = notes.filter((note)=> note.title !== title);

    // const noteToKeep = notes.filter(function(note){
    //     return note.title !== title;
    // });



    // at the end we replace whole notes.json with this new file 
    if(noteToKeep.length === notes.length){
        console.log(chalk.red("Note is NOT Found!"));
    }else{
        console.log(chalk.green('Note is removed!'))
        saveNotes(noteToKeep);
    }

}

const saveNotes = function(notes){
    const dataJSON=JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON);

}

const loadNotes = function(){
    try{
        const dataBuffer=fs.readFileSync('notes.json');
        const dataJSON=dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e){
        return [];
    }
}

module.exports = {
    getNote:getNote,
    addNote:addNote,
    removeNote:removeNote,
    readNotes:readNotes,
    listNotes:listNotes
}