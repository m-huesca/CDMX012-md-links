const fs = require('./nodeFiles');
const { verifyPath, fileOrDir } = require('./resolvePath');
const { parseFile } = require('./readFile');
const { validateLink } = require('./validate');
const { getStats } = require('./stats');

function mdLink(inputPath, options) {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(inputPath)) {
      const solvedPath = verifyPath(inputPath);
      const mdFiles = fileOrDir(solvedPath);
      const mdLinks = parseFile(mdFiles);
      if (options === undefined) {
        resolve(mdLinks);
      } else if (options === 'validate') {
        resolve(validateLink(mdLinks));
      } else if (options === 'stats') {
        resolve(getStats(mdLinks));
      } else {
        reject(console.log('option not valid'));
      }
    }
  });
}

module.exports = { mdLink };
