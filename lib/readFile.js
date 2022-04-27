const cheerio = require('cheerio');
// const got = require('got');
const marked = require('marked');

const parseFile = (data, solvedPath) => {
  const toHTML = marked.parse(data);
  const $ = cheerio.load(toHTML);
  $('a').each((i, link) => {
    const linkHref = link.attribs.href;
    if (linkHref.includes('https') === true) {
      const textChar = $(link).text();
      const resolvedPromise = {
        href: linkHref,
        text: textChar,
        path: solvedPath,
      };
      return console.log(resolvedPromise);
    }
    // console.log(linkHref, 'this is a link');
    // console.log(solvedPath, 'brings the path');
  });
};

module.exports = { parseFile };
