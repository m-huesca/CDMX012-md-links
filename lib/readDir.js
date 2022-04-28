const fs = require('fs');
const path = require('path');
// const { verifyPath } = require('./resolvePath');

// function parseDir(solvedPath) {
//   fs.readdir(solvedPath, (err, files) => {
//     if (err) {
//       console.error(err);
//     } else {
//       // console.log('Filenames with the .md extension:');
//       const dirFiles = files.forEach(file => {
//         console.log(file);
//       });
//     }
//   });
// }

//   fs.readdir(solvedPath, )
// //   console.log('Reading directory now function');
// //   // leer directorio y te regresa array con cada archivo - fs.readdir() method
// //   // que cada uno de esos archivos (.foEach?) se verifique si es md o nel
// // };

const parseDir = (solvedPath) => {
  fs.readdir(solvedPath, (err, files) => {
    if (err) {
      console.error(err);
    } else {
      console.log(files);
      // console.log('Filenames with the .md extension:');
      const filesDir = files.forEach(file => {
        if (path.extname(file) === '.md' || path.extname(file) === '') {
          console.log(file, 'individual');
        }
      });
      return filesDir;
    }
  });
};

module.exports = { parseDir };
