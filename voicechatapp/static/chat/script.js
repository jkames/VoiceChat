var socket = new WebSocket('ws://' + window.location.host + '/ws/chat/test/');

socket.onopen = function(e) {
    console.log('WebSocket connection established');
    sendMessage({message: 'Hello, world!'});
};

socket.onmessage = function(e) {
    var data = JSON.parse(e.data);
    console.log(data);
};

socket.onclose = function(e) {
    console.log('WebSocket connection closed');
};

socket.onerror = function(e){
    console.log('WebSocket error  ' + e);
}
function sendMessage(message) {
    if (socket.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify(message));
    } else {
        console.error('WebSocket is not open. Ready state is: ' + socket.readyState);
    }
}