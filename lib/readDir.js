/* eslint-disable arrow-parens */
const fs = require('fs');
const path = require('path');

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
//   console.log('Reading directory now function');
//   // leer directorio y te regresa array con cada archivo - fs.readdir() method
//   // que cada uno de esos archivos (.foEach?) se verifique si es md o nel
// };

function parseDir(solvedPath) {
  fs.readdir(solvedPath, (err, files) => {
    if (err) {
      console.error(err);
    } else {
      // console.log('Filenames with the .md extension:');
      files.forEach(file => {
        if (path.extname(file) === '.md' || path.extname(file) === '') {
          console.log(file, 'individual');
        }
      });
    }
  });
}

module.exports = { parseDir };
