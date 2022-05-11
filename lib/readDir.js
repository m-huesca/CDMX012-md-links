const path = require('./nodeFiles');

function joinPath(file, inputPath) {
  const fixPath = path.resolve(path.join(inputPath, file));
  return fixPath;
}

function parseFolders(files, solvedPath) {
  const filesArray = [];
  files.forEach((file) => filesArray.push(joinPath(file, solvedPath)));
  return filesArray;
}

// const filesData = (stringFiles) => {
//   fs.readFile(stringFiles, 'utf8', (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       parseFile(data, stringFiles);
//     }
//   });
// };

// function parseDir(solvedPath, arrayFiles) {
//   // const where files will pushed
//   const fixedFiles = [];
//   // function to read directories
//   const directoryFiles = fs.readdirSync(solvedPath);
//   // iterating through directory files
//   directoryFiles.forEach((file) => {
//     // solve relative path (need to fix?)
//     const fixedPath = path.resolve(solvedPath, file);
//     console.log(fixedPath, 'este es el fixed path');
//     // console.log(file, 'este es el archivo?');
//     // sort between directory and files
//     if (fs.statSync(fixedPath).isDirectory()) {
//       // if is directory run function again (recursion)
//       // console.log(fixedPath, 'RETURN TO FUNCTION IF DIRECTORY');
//       parseDir(fixedPath, arrayFiles);
//       // if file is md, push the path to arrayfiles
//     } else if (path.extname(fixedPath) === '.md') {
//       fixedFiles.push(fixedPath).toString();
//       // console.log(fixedFiles, 'this is md ready to get data');
//     }
//   });
//   return filesData(fixedFiles);
// const stringFiles = fixedFiles.toString();
// // SEPARAR LOS FILES DEL OBJETO
// console.log(stringFiles, 'strings passed to get data');
// return filesData(stringFiles);

module.exports = { parseFolders, joinPath };

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
