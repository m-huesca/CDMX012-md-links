const path = require('./nodeFiles');
const fs = require('./nodeFiles');
const { parseFolders } = require('./readDir');

const mdFilesArr = [];

function fileOrDir(solvedPath) {
  let result = [];
  if (fs.lstatSync(solvedPath).isDirectory()) {
    const files = fs.readdirSync(solvedPath, 'utf8');
    const dirInfo = parseFolders(files, solvedPath);
    result = dirInfo.forEach((file) => fileOrDir(file));
  } else if (path.extname(solvedPath) === '.md') {
    result.push(solvedPath);
  }
  mdFilesArr.push.apply(mdFilesArr, result);
  return mdFilesArr;
}
function verifyPath(inputPath) {
  if (path.isAbsolute(inputPath) === false) {
    return path.resolve(inputPath);
  }
  return inputPath;
}
// console.log(inputPath, ' was absolute');

// SUBSTITUTED for !fs.existsSync(inputPath)
//   function verifyInput(inputPath) {
//     fs.stat(inputPath, (err) => {
//       if (err.code === 'ENOENT') {
//         console.log(`File ${inputPath} does not exist.`);
//       // console.log(inputPath, 'Path is valid');
//       } else if (err) {
//         console.log(err.code);
//       } else {
//         const verifiedInput = verifyPath(inputPath);
//       }
//     });
//     return verifiedInput;
//   }
// }

// function fileOrDir(solvedPath) {
//   fs.readFile(solvedPath, 'utf8', (err, data) => {
//     if (err === null && path.extname(solvedPath) === '.md') {
//       // importar data, solvedPath para leer archivo en fn
//       // console.log(data, 'data');
//       return parseFile(data, solvedPath);
//     } else if (err.code === 'EISDIR') {
//       console.log('is a directory');
//       return solvedPath;
//     } else {
//       console.log('error reading a file');
//       console.error(err);
//     }
//   });
//   // console.log(solvedPath, 'fileOrDir FUNCTION')
//   return solvedPath;
// }
module.exports = { verifyPath, fileOrDir };
