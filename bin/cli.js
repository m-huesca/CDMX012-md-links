#!/usr/bin/env node
const { process } = require('../lib/nodeFiles');
const { yargs } = require('../lib/nodeFiles');
const { mdLink } = require('../lib/mdlinks');

//  CLI
const argv = yargs
  .scriptName('md-links')
  .usage('\nUsage: $0 path --validate --stats \n file paths can be absolue or relative \n --validate and --stats are optional')
  .example('$0 docs\\doc.md --validate --stats')
  .option('validate', {
    alias: 'v',
    demandOption: false,
    describe: 'Validate the links found in md files',
    type: 'boolean',
  })
  .option('stats', {
    alias: 's',
    demandOption: false,
    describe: 'Shows stats about links found in md files',
    type: 'boolean',
  })
  .help(true);
  .argv;

// validate path

const main = () => {
  // User inputs
  const inputPath = process.argv[2];
  const { validate } = yargs.argv.validate;
  const { stats } = yargs.argv.stats;
  let option = '';
  if (yargs.argv._[0] == null) {
    console.log('Hmm... command not valid, type --help for availabe options');
  // ! before a fn makes the expresion return a boolean based on the reurn value of the function
  } else if (validate) {
    option = 'validate';
    mdLink(inputPath, option).then((solved) => console.log(solved));
  } else if (stats) {
    option = 'stats';
    mdLink(inputPath, option).then((solved) => console.log(solved));
  } else if (stats && validate) {
    option = 'validate, stats';
    mdLink(inputPath, option).then((solved) => console.log(solved));
  } else {
    option = undefined;
    mdLink(inputPath, option).then((solved) => console.log(solved));
  }
};
main();
