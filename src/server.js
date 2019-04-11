'use strict';

const io = require('socket.io')(3000);

io.on('connection', (socket) => {
  console.log('Connected', socket.id);

  /**
   * When the server hears file-error, emit error.
   * @param  {} 'file-error'
   * @param  {} (payload
   * @param  {} =>{console.log('Errorinserver.'
   * @param  {} ;socket.broadcast.emit('error'
   * @param  {} payload
   * @param  {} ;}
   */
  socket.on('file-error', (payload) => {
    console.log('Error in server.');
    socket.broadcast.emit('error', payload);
  });
  
  /**
   * When the server hears 'file-save', emit 'file-save'.
   * @param  {} 'file-save'
   * @param  {} (payload
   * @param  {} =>{console.log('Successinserver.'
   * @param  {} ;socket.broadcast.emit('file-save'
   * @param  {} payload
   * @param  {} ;}
   */
  socket.on('file-save', (payload) => {
    console.log('Success in server.');
    socket.broadcast.emit('file-save', payload);
  });
});
