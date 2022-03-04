let pwd = require("./pwd");
let ls = require("./ls");
let cat = require("./cat");

process.stdin.on("data", (data) => {
    // console.log(data);
    const cmd = data.toString().trim();
    // console.log(cmd);
    let cmdArr = cmd.split(" ");
    // console.log(cmdArr[1]);

    if (cmdArr[0] === "cat") {
        // let dataArr = data.split(" ");
        cat(cmdArr[1])
        // console.log(data[1]);
    }
    if (cmdArr[0] === "ls") {
        ls()
    }

    if (cmdArr[0] === "pwd") {
        pwd()
    }
}
)

// ls();




  
    
    
// cat() ;
// ls()

// pwd();




module.exports = function () {
      process.stdout.write(
          fs.readdir("./", "utf8", (err, files) => {
          if (err) {
            throw err;
          }
          else {
            process.stdout.write(files.join("\n"));
            process.stdout.write("\nprompt > ");
          }
        })
      );
  };
