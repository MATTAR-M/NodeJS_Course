// require("path")
// require("./index3")
// console.log({__filename})
// require("node:path")
// const path = require("node:path")
// console.log(path.basename(__dirname));
// console.log(path.basename(__filename,".js"));
// console.log(path.extname(__filename));

// console.log(path.dirname(__dirname));
// console.log(path.dirname(__filename));
// console.log(path.join(__dirname,"bonus.js"))
// console.log(path.isAbsolute(__dirname))
// console.log(path.resolve("index4.js"));
const {EventEmitter} = require("node:events")
const event = new EventEmitter()
event.prependListener("sayHi",()=>{
    console.log("hello")
})
event.emit("sayHi")
event.emit("sayHi")
event.emit("sayHi")
event.emit("sayHi")
event.emit("sayHi")




