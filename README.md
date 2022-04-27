# Markdown Links
Md-links is a js library that helps identify broken or deprecated links in markdown files. 

* Recursively reads folders found inside the given path when a directory.
* Link extraction supported by [marked](https://github.com/markedjs/marked) and [cheerio](https://cheerio.js.org/).
* Identifies broken or deprecated links.
* Delivers basic and complete stats about the links found.

## Índice

* [1. About](#1-about)
* [2. Installation](#2-installation)
* [3. Usage](#3-usage)

***

## 1. About
This project has the following dependencies:

* [Yargs](http://yargs.js.org/)
* [cheerio](https://cheerio.js.org/)
* [axios](https://axios-http.com/docs/intro)
* [marked](https://github.com/markedjs/marked)

Tested using [Jest](https://jestjs.io/).

## 2. Installation

Use the package manager [npm](https://pip.pypa.io/en/stable/) to install @mariana0910/mdlinks

```bash
npm @mariana0910/mdlinks
```

## 3. Usage

* md-links <path-to-file> [options]
* The introduced path can be absolute or relative

md-links <path-to-file> 

```bash
  md-links docs/doc-4.md
```
[options]
* Options can be introduced like shown below:

Validate

```bash
  md-links docs/doc-4.md --validate
```

Stats

```bash
 md-links docs/doc-4.md --stats
```

Validate & Stats

```bash
md-links docs/doc-4.md --validate--stats
```
Help

```bash
md-links docs/doc-4.md --help
```

When no option is provided, the return value will contain:
* href: link found
* text: associated text to the link
* path: absolute path that cointains the file

## Authors

- [@m-huesca](https://github.com/m-huesca)
