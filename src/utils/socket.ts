import socketIoClient from 'socket.io-client';

// export const socket = socketIoClient('http://192.168.0.179:8000');
export const socket = socketIoClient('https://chattie-api-prod.herokuapp.com/');

export const initSocket = () => {
  socket.on('message', ({ text }: { text: string }) => {
    console.log('message from server:', text);
  });
};

export const joinRoom = (username: string, room: string) => {
  socket.emit('join', { username, room }, (error: any) => {
    if (error) {
      alert(error);
    }
  });
};

export const sendMessage = (message: string) => {
  socket.emit('messageSend', 'message', (error: any) => {
    if (error) {
      return console.log('ack', error);
    }
    console.log('Message delivered');
  });
};

export const sendLocation = (longitude: number, latitude: number) => {
  socket.emit('sendLocation', { longitude, latitude }, () => {
    console.log('Location send');
  });
};

socket.on('locationMessage', (location: any) => {
  console.log('message from server:', location);
});

socket.on('roomData', ({ users, room }: any) => {
  console.log('users, room', users, room);
});
