'use strict';

const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');

/**Listen for the 'file-save' then log success.
 * @param  {} 'file-save'
 * @param  {} (payload
 * @param  {} =>{console.log('Filewrittensuccessfully.'
 * @param  {} payload
 * @param  {} ;}
 */
socket.on('file-save', (payload) => {
  console.log('File written successfully.', payload);
});

/**Listen for 'error' then log the error.
 * @param  {} 'error'
 * @param  {} (payload
 * @param  {} =>{console.log('Anerroroccured'
 * @param  {} payload
 * @param  {} ;}
 */
socket.on('error', (payload) => {
  console.log('An error occured', payload);
});
