import io from 'socket.io-client';
const socket = io('http://example-express-server.herokuapp.com/');
socket.on('connect', ()=> {
  console.log('connect');
});

export default socket;