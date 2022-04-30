const process = require('process');

const { validPath, absolutePath } = require('./lib/mdlinks');
const { verifyInput } = require('./lib/resolvePath');
const { validateLink } = require('./lib/validate');

const userInput = process.argv[3];
const egPromise = {
  href: 'https://axios-http.com/docs/intro',
  text: 'Axios',
  path: '/Users/mhuesca/CDMX012-md-links/docs/docsLevel1/docsLevel2/doc-10.md',
};
const mdLinks = (verifyCallback) => verifyCallback();

if (process.argv[2] === '--valid') {
  console.log(mdLinks(validPath));
} else if (process.argv[2] === '--absolute') {
  console.log(mdLinks(absolutePath));
} else if (process.argv[2] === '--resolve') {
  console.log(verifyInput(userInput), 'mdlinks');
} else if (process.argv[2] === '--val') {
  console.log(validateLink(egPromise), 'mdlinks');
} else {
  console.log('Not valid');
}
// module.exports = () => {
//   // ...
// };
