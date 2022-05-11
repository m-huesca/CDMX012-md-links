const { cheerio, marked, fs } = require('./nodeFiles');

function parseFile(mdFilesArr) {
  const result = [];
  mdFilesArr.forEach((file) => {
    const data = fs.readFileSync(file, 'utf8');
    const toHTML = marked.parse(data);
    const $ = cheerio.load(toHTML);
    $('a').each((i, link) => {
      result.push({
        href: link.attribs.href,
        text: $(link).text(),
        link: file,
      });
    });
  });
  return result;
}
// const parseFile = (data, solvedPath) => {
//   const toHTML = marked.parse(data);
//   const $ = cheerio.load(toHTML);
//   $('a').each((i, link) => {
//     const linkHref = link.attribs.href;
//     if (linkHref.includes('https') === true) {
//       const textChar = $(link).text();
//       const resolvedPromise = {
//         href: linkHref,
//         text: textChar,
//         link: solvedPath,
//       };
//       return resolvedPromise;
//     }
//     // console.log(linkHref, 'this is a link');
//     // console.log(solvedPath, 'brings the path');
//   });
// };

module.exports = { parseFile };
