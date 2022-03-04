
const fs = require("fs");


// fs.readdir('./', 'utf8', (err, files) => {
//     if (err) {
//         throw err
//     } else {
//         process.stdout.write(files.join('\n'))
//         process.stdout.write("prompt > ");
//     }
//     })



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





module.exports = function () {
  process.stdout.write("prompt > ");

  process.stdout.on("data", (data) => {
    const cmd = data.toString().trim();
    if (cmd === "ls") {
      console.log(
        fs.readdir("./", "utf8", (err, files) => {
          if (err) {
            throw err;
          } else {
            process.stdout.write(files.join("\n"));
            process.stdout.write("\nprompt > ");
          }
        })
      );
    } else {
      process.stdout.write("You typed: " + cmd);
      process.stdout.write("\n prompt > ");
    }
  });
};
