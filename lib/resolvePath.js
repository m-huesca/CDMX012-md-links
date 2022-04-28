const path = require('path');
const fs = require('fs');
const { parseFile } = require('./readFile');
const { parseDir } = require('./readDir');

// const verifyMd = (solvedPath) => {
//   if (path.extname(solvedPath) === '.md') {
//     console.log('File is md');
//     readFile(solvedPath);
//   }
// };

const fileOrDir = (solvedPath) => {
  fs.readFile(solvedPath, 'utf8', (err, data) => {
    if (err === null && path.extname(solvedPath) === '.md') {
      // importar data, solvedPath para leer archivo en fn
      // console.log(data, 'data');
      parseFile(data, solvedPath);
    } else if (err.code === 'EISDIR') {
      console.log('is a directory');
      parseDir(solvedPath);
    } else {
      console.log('error reading a file');
      console.error(err);
    }
  });
  return solvedPath;
};
const resolvePath = (inputPath) => {
  const newPath = path.resolve(inputPath);
  // console.log(newPath, 'is now absolute');
  return fileOrDir(newPath);
};

const verifyPath = (inputPath) => {
  if (path.isAbsolute(inputPath)) {
    console.log(inputPath, ' was absolute');
    fileOrDir(inputPath);
  } else {
    resolvePath(inputPath);
  }
  return inputPath;
};

const verifyInput = (inputPath) => {
  fs.stat(inputPath, (err) => {
    if (err == null) {
      // console.log(inputPath, 'Path is valid');
      verifyPath(inputPath);
    } else if (err.code === 'ENOENT') {
      console.log(`File ${inputPath} does not exist.`);
    }
  });
  return inputPath;
};

module.exports = { verifyInput };
