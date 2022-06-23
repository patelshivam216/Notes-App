const yargs=require('yargs');
const notes=require('./notes')

// add command
yargs.command({
    command:'add',
    describe:'add a note',
    builder:{
        title:{
            describe:'Note Title!',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'add body',
            demandOption:true,
            type:'string'

        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body);
    }
})

// remove command 
yargs.command({
    command:'remove',
    describe:'removing a note',
    builder : {
        title:{
            describe:'title for remove note',
            demandOption: true,
            type : 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title);
    }
})

//read command 
yargs.command({
    command:'read',
    describe:'reading a Note',
    builder:{
        title:{
            describe:'Title of Note',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.readNotes(argv.title);
    }
})

// list command
yargs.command({
    command:'list',
    describe:'list all Notes',

    handler(){
        notes.listNotes()
    }

})


yargs.parse();