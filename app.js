'use strict';

require('./src/logger.js');
let alter = require('./src/app.js');

let file = process.argv.slice(2).shift();
alter.alterFile(file);