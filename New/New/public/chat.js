//Make connection
var socket  = io.connect("http://52.187.120.32:3000");


// Query DOM
var message = document.getElementById('message'),
      handle = document.getElementById('handle'),
      btn = document.getElementById('send'),
      output = document.getElementById('output');
      feedback = document.getElementById('feedback');
      lo = "reload page";
// Emit events
btn.addEventListener('click' , function(){
    socket.emit('relo',{
        lo : lo.value
    });
});

// btn.addEventListener('click', function(){
//   socket.emit('chat', {
//       message: message.value,
//       handle: handle.value

//   });
//   message.value = "";

// });

// message.addEventListener('keypress', function(){
//     socket.emit('typing', handle.value);
// })


// // Listen for events
// socket.on('chat', function(data){
//     feedback.innerHTML = "";
//     output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
// });

// socket.on('typing', function(data){
//     feedback.innerHTML = '<p><em>' + data + ' is typing a message...</em></p>';
// });

// socket.on('relo', function(data){
//     window.location.reload();
// });
