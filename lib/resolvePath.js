const path = require('path');
const fs = require('fs');

const isDir = (dirPath) => {
  console.log('Reading directory');
  // leer directorio y te regresa array con cada archivo - fs.readdir() method
  // que cada uno de esos archivos (.foEach?) se verifique si es md o nel
};

const readFile = (solvedPath) => {
  console.log('Reading and Creating object with requiered info');
};

// const verifyMd = (solvedPath) => {
//   if (path.extname(solvedPath) === '.md') {
//     console.log('File is md');
//     readFile(solvedPath);
//   }
// };

const fileOrDir = (solvedPath) => {
  fs.readFile(solvedPath, 'utf8', (err, data) => {
    if (err === null && path.extname(solvedPath) === '.md') {
      console.log(data, 'data');
    } else if (err.code === 'EISDIR') {
      console.log('is a directory');
      isDir(solvedPath);
    }
    // } else {
    //   console.log('error reading a file');
    //   console.error(err);
    // }
  });
};
const resolvePath = (inputPath) => {
  const newPath = path.resolve(inputPath);
  console.log(newPath, 'is now absolute');
  fileOrDir(newPath);
};

const verifyPath = (inputPath) => {
  if (path.isAbsolute(inputPath)) {
    console.log(inputPath, ' was absolute');
    fileOrDir(inputPath);
  } else {
    resolvePath(inputPath);
  }
};

const verifyInput = (inputPath) => {
  fs.stat(inputPath, (err) => {
    if (err == null) {
      console.log(inputPath, 'Path is valid');
      verifyPath(inputPath);
    } else if (err.code === 'ENOENT') {
      console.log(`File ${inputPath} does not exist.`);
    }
  });
};

module.exports = { verifyInput };
