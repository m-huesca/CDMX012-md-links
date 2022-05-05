#!/usr/bin/env node

const yargs = require('yargs');
const { verifyInput } = require('./lib/resolvePath');

//  CLI
const { argv } = yargs
  .scriptName('mdLinks')
  .usage('\nUsage: $0 path --validate --stats \n file paths can be absolue or relative \n --validate and --stats are optional')
  .example('$0 docs\\doc.md --validate --stats')
  .option('validate', {
    alias: 'v',
    demandOption: false,
    describe: 'Validate the links found in md files',
  })
  .option('stats', {
    alias: 's',
    demandOption: false,
    describe: 'Shows stats about links found in md files',
  })
  .alias('h', 'help');
// User inputs
const inputPath = argv._[0];
const { validate } = argv.validate;
const { getStats } = argv.stats;

// mdLinks
mdLinks(inputPath, validate)
