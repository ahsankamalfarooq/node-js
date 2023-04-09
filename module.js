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

// console.log('file name : ', path.basename(__filename))

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

// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//  if(err) {
//     console.log('spmething went wrong', err)
//     return
//  }
//     console.log('Folder Created' )
// })



///////////////////////////////////////////////////////////
// Create A file

//so this method makes the file and if we again create the file so it will no give an error regard it will delete the file 
//content and rewrite it
// fs.writeFile( path.join(__dirname, "test", "test.js") , "Hello Bugti" , (err) => {
//   if(err) {
//     console.log(err)
//     return
//   } else{
//     console.log("file created")
//   }
// } )

//so if we want to not to delete the file content and add the file content so we have to use append file method

// fs.appendFile( path.join(__dirname, "test", "test.js") , "Hello khr" , (err) => {
//   if(err) {
//     console.log(err)
//     return
//   } else{
//     console.log("file created")
//   }
// } )


/////////////////////////////////////////////////////////////
//Read A File

// fs.readFile(path.join(__dirname, "test", "test.js"), (err, data) => {
//   if(err) {
//     throw err
//   }
//   //here we r receiving bin data so to get string data do following
//   const content = Buffer.from(data)
//   console.log(data.toString())
// })


// Another Method to do that


// fs.readFile(path.join(__dirname, "test", "test.js"), 'utf-8' ,(err, data) => {
//   if(err) {
//     throw err
//   }
//   //here we r receiving bin data so to get string data do following

//   // console.log(data.toString())
//   console.log(data)
// })

//////////////////////////////////////////////////////////////

// Operation sys Module 

// OS MODULE 

const os = require('os')

// console.log("os type:" , os.type())

//type === platform

// console.log("os platform:" , os.platform())

// CPU ARCHITECTURE
// console.log("cpu architecture:" , os.arch())

//more info

// console.log("cpu details:" , os.cpus())

//MEMORY

// console.log("Total memory:" , os.freemem())

// total MEMORY

// console.log("Total memory:" , os.totalmem())


// PC started since

// console.log("pc started from:" , os.uptime())


////////////////////////////////////////////////////////
//EVENTS MODULE
//////////////////////////////////////////////////////////

const Emitter = require('events')

// Emitter is a class so make obj of it 

// const myEmitter = new Emitter()
// event name clcik
// myEmitter.on('click', (data) => {
//   console.log(data)
// })

// //sending the event that is click event and the data associated with that event

// myEmitter.emit('click' , {
//   name: "ALI",
//   ch : "Strong"
// })

//ANOTHER EXAMPLE PRACTICLE RELATED


// class Auth extends Emitter{
//   register(username) {
//     console.log('registered successfully...')
//     //we want to send the verification main to thoese who register by calling the emit method which we inherited form the emitter class
//     this.emit('registered', username )
//   }

// }

// const mangoauth = new Auth()
// //listen to the event

// //Verify Email
// mangoauth.on('registered', (data) => {
//   console.log(`sening e-mail to ${data}`)
// })

// //Welcome EMail
// mangoauth.on('registered', (data) => {
//   console.log(`sening welcome e-mail to ${data}`)
// }) 

// //we can add multiple listeners to an event
// mangoauth.register('Mango Tree')


//////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////


































