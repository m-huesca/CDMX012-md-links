const fs = require('fs');
const path = require('path');
const axios = require('axios').default;
const cheerio = require('cheerio');
const marked = require('marked');
const yargs = require('yargs');
const process = require('process');

module.exports = {
  fs, path, axios, cheerio, marked, yargs, process,
};
