const fs = require('fs');
const path = require('path');

//   fs.readdir(solvedPath, )
// //   console.log('Reading directory now function');
// //   // leer directorio y te regresa array con cada archivo - fs.readdir() method
// //   // que cada uno de esos archivos (.foEach?) se verifique si es md o nel
// // };

function parseDir(solvedPath, arrayFiles) {
  // const where files will pushed
  const fixedFiles = [];
  // function to read directories
  const directoryFiles = fs.readdirSync(solvedPath);
  // iterating through directory files
  directoryFiles.forEach((file) => {
    // solve relative path (need to fix?)
    const fixedPath = path.resolve(solvedPath, file);
    console.log(fixedPath, 'este es el fixed path');
    // sort between directory and files
    if (fs.statSync(fixedPath).isDirectory()) {
      // if is directory run function again (recursion)
      parseDir(fixedPath, arrayFiles);
      // if file is md, push the path to arrayfiles
    } else if (path.extname(fixedPath) === '.md') {
      fixedFiles.push(fixedPath);
    }
  });
  return console.log(fixedFiles, 'finished PARSEDIR');
}

module.exports = { parseDir };

// function parseDir(solvedPath) {
//   const directoryFiles = fs.readdir(solvedPath, (err, files) => {
//     if (err) {
//       console.error(err);
//     } else {
//       console.log(files);
//       // console.log('Filenames with the .md extension:');
//       const filesDir = files.forEach(file => {
//         if (path.extname(file) === '.md' || path.extname(file) === '') {
//           console.log(file, 'individual');
//         }
//       });
//       return filesDir;
//     }
//   });
//   return directoryFiles;
// }
