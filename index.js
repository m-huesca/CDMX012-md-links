const process = require('process');

const { validPath, absolutePath } = require('./lib/mdlinks');
const { verifyInput } = require('./lib/resolvePath');

const userInput = process.argv[3];
const mdLinks = (verifyCallback) => verifyCallback();

if (process.argv[2] === '--valid') {
  console.log(mdLinks(validPath));
} else if (process.argv[2] === '--absolute') {
  console.log(mdLinks(absolutePath));
} else if (process.argv[2] === '--resolve') {
  console.log(verifyInput(userInput), 'mdlinks');
} else {
  console.log('Not valid');
}
// module.exports = () => {
//   // ...
// };
