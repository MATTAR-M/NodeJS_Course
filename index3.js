const path = require("node:path")
console.log(path);
console.log(__dirname); 
console.log(__filename); 
console.log(path.basename(__filename));
console.log(path.basename(__filename, ".js"));
console.log(path.basename(__dirname));
console.log(path.dirname(__filename));
console.log(path.dirname(__dirname));
console.log(path.extname(__filename));
console.log(path.extname(__dirname));
console.log("NODEJS_COURSE/index2.js");
console.log(path.posix.sep);
console.log(path.join("NODEJS_COURSE", "index2.js"));
console.log(path.join(__dirname, "index.js"));
console.log(path.resolve("index3.js"));
console.log(path.resolve("bonus.js"));
console.log(path.isAbsolute("C:/Users/Desktop/NODEJS_COURSE/index3.js"));
console.log(path.normalize("/NODEJS_COURSE//../NODEJS_COURSE/index3.js"));
console.log(path.parse(__dirname));
console.log(path.parse(__filename));
console.log(path.format({
    root: "D:\\",
    dir: "D:\\NODEJS_COURSE",
    base: "index3.js",
    ext: ".js",
    name: "index3",
  }));
