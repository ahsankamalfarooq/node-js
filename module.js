//module mean file the code which i am writing here will remain here not clash with any file , and if we want to use that so we will have to export it


// npm module(which npm made by itself)

// iifc

// const color = require('cli-color')
// console.log(color.red('hello'))

// from where that require function came from so for that we hVE TO 
// UNDERSTND THe immediately invoked function of JS (IIFE)


 //( function(name) {
  //  console.log(name)
//}) ("Ali") //() for immediTE INVOKING bcz we didnt give any name

 //so what node js do is that is will wrap every file in to iife function that the const, var and let etc or any thing can never be used outside


///////////////////////////////////////////////////////////
// LOcal Module (which we made by ourselves)
///////////////////////////////////////////////////////////

//importing file from auth.js

// const reister = require('./auth')

// reister('ALi')



///////////////////////////////////////////////////////////
// Core Modules
///////////////////////////////////////////////////////////

const path = require('path')


//DIRNAME (So if we want to find folder name we can file through it or any url etc)

// console.log('folder name : ', path.dirname(__filename))


//FileNAME (So if we want to find folder name we can file through it or any url etc)

// console.log('file name : ', path.basename(--__filename))

//////////////////////////////////////////////////////////
//ExtensionNAME 

// console.log('Ext name : ', path.extname(__filename))
//////////////////////////////////////////////////////////////
//Parse 

// console.log('Parse : ', path.parse(__filename))

///////////////////////////////////////////////////////////
// Join 

// console.log('Parse : ', path.join(__filename))


///////////////////////////////////////////////////////////
// File system

const fs = require('fs');

//make dir

fs.mkdir(path.join(__dirname, 'test'), (err) => {
 if(err) {
    console.log('spmething went wrong', err)
    return
 }
    console.log('Folder Created' )
})


