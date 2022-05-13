// const { process, fs } = require('./lib/nodeFiles');
// const { validateLink } = require('./lib/validate');
// const { getStats } = require('./lib/stats');
// const { verifyPath, fileOrDir } = require('./lib/resolvePath');
// const { parseFile } = require('./lib/readFile');

// const userInput = process.argv[3];
// const flag = process.argv[2];
// const egPromise = {
//   href: 'https://axios-http.com/docs/intro',
//   text: 'Axios',
//   path: '/Users/mhuesca/CDMX012-md-links/docs/docsLevel1/docsLevel2/doc-10.md',
// };

// if (flag === 'null') {
//   console.log(mdLink(userInput));
// } else if (flag === '--validate' || flag === '--v') {
//   console.log(validateLink(userInput));
// } else if (process.argv[2] === '--val') {
//   console.log(validateLink(egPromise), 'mdlinks');
// } else if (process.argv[2] === '--stats') {
//   console.log(getStats(egPromise), 'mdlinks');
// } else {
//   console.log('Not valid');
// }

// function mdLink(inputPath, options) {
//   return new Promise((resolve, reject) => {
//     if (fs.existsSync(inputPath)) {
//       const solvedPath = verifyPath(inputPath);
//       const mdFiles = fileOrDir(solvedPath);
//       const mdLinks = parseFile(mdFiles);
//       if (options === undefined) {
//         resolve(mdLinks);
//       } else if (options === '--validate') {
//         resolve(validateLink(mdLinks));
//       } else if (options === '--stats') {
//         resolve(getStats(mdLinks));
//       } else {
//         reject(console.log('option not valid'));
//       }
//     }
//   });
// }
// mdLink();
