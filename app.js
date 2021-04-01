const validator = require("Validator")
const chalk = require('chalk')

const getNotes = require('./notes.js')

const yargs = require('yargs');

yargs
    .command({
        command:'add',
        describe:'Adding command',
        handler: argv => {
            console.log('Adding notes');
        }
    })
    .parse();
