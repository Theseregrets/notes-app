const validator = require("Validator")
const chalk = require('chalk')

//const getNotes = require('./notes.js')

const yargs = require('yargs')

yargs.version('1.1.0')

yargs.command({
  command: 'add',
  describe: 'Adding command',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function(argv) {
    console.log('Adding notes');
    console.log('Title: ' + argv.title)
    console.log('Body: ' + argv.body)
  }
})
yargs.command({
  command: 'remove',
  describe: 'removing command',
  handler: function() {
    console.log('removing notes');
  }
})
yargs.command({
  command: 'read',
  describe: 'reading command',
  handler: function() {
    console.log('reading notes');
  }
})

yargs.parse()
