'use strict';

const fs = require('fs');
const util = require('util');
let readFile = util.promisify(fs.readFile);
let writeFile = util.promisify(fs.writeFile);
const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');
require('./logger.js');

const net = require('net');
const client = new net.Socket();
client.connect(3000, 'localhost', () => {});


/**Read in a file then return a promise.
 * @param  {} file
 * @param  {} =>{returnreadFile(file
 */
let read = (file) => {return readFile(file);};

/**Write a file then return a promise.
 * @param  {} file
 * @param  {} buffer
 * @param  {} =>{returnwriteFile(file
 * @param  {} buffer
 */
let write = (file, buffer) => {return writeFile(file, buffer);};

/**Uppercase the contents of a buffer.
 * @param  {} buffer
 * @param  {} =>{Buffer.from(buffer.toString(
 * @param  {} .trim(
 * @param  {} .toUpperCase(
 */
let upper = (buffer) => { Buffer.from(buffer.toString().trim().toUpperCase());};


/**Wrapper function for the promises.
 * @param  {} file
 * @param  {} =>{read(file
 * @param  {} .then(buffer=>{buffer=upper(buffer
 * @param  {} ;write(file
 * @param  {} buffer
 * @param  {} .then(socket.emit('file-save'
 * @param  {} 'filewrittenok'
 * @param  {} ;}
 * @param  {} .catch(error=>socket.emit('file-error'
 * @param  {} error
 */
let alterFile = (file) => {
  read(file)
    .then(buffer => {
      buffer = upper(buffer);
      write(file, buffer)
        .then(socket.emit('file-save', 'file written ok'));
    })
    .catch(error => socket.emit('file-error', error));
};

module.exports = {alterFile};