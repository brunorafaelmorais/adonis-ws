// const Event = use('Event')
// const Ws = use('Ws')
// const User = use('App/Models/User')

// Event.on('new::user', () => {
//   Ws.channel('chat', async ({ socket }) => {
//     const messages = await User.all();

//     socket.emit('previousMessages', messages);

//     socket.on('sendMessage', (data) => {
//       messages.push(data);
//       socket.broadcast.emit('receivedMessage', data);
//     });
//   })
// })
