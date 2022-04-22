const process = require('process');

const { validPath, absolutePath } = require('./lib/mdlinks');

const mdLinks = (verifyCallback) => verifyCallback();

if (process.argv[2] === '--valid') {
  console.log(mdLinks(validPath));
} else if (process.argv[2] === '--absolute') {
  console.log(mdLinks(absolutePath));
} else {
  console.log('Not valid');
}
// module.exports = () => {
//   // ...
// };
