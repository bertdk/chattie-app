import { loadRoom } from 'actions/room.action';
import socketIoClient from 'socket.io-client';
import { socketUrl } from 'urls';

export const socket = socketIoClient(socketUrl, { transports: ['websocket'] });

export const joinRoom = (username: string, room: string) => {
  socket.emit('join', { username, room }, (error: any) => {
    if (error) {
      alert(error);
    }
  });
};

export const sendMessage = (message: string) => {
  socket.emit('messageSend', message, (error: any) => {
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
  const names: string[] = users.map((u: any) => u.username);
  loadRoom(names, room);
});
