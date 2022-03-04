const fs = require("fs");

//on Command prompt we will input cat fileName
//the cat file will include a module that reads and prints the content of a file
//bash recieves the file in which we want to read & print
// console.log('hi')
//utf only for ls 
module.exports = function (filename) {
    console.log(filename)
    // console.log(data)
    fs.readFile(filename, (err, data) => {
      
      if (err) {
          throw err;
      }
    else {
      process.stdout.write(data);
      process.stdout.write("prompt > ");
    }
  });
};

// fs.readFile(`./${filename}`, "utf8", (err, files) => {
//   if (err) {
//     throw err;
//   } else {
//     process.stdout.write(files.join("\n"));
//     process.stdout.write("prompt > ");
//   }
// })
