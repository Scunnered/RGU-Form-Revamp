
var clientsocket = io();
encrypt('secret')(clientsocket)

$(document).ready(function(){
    welcome()
    clientsocket.emit('message', {"Hello": "Welcome"})
    console.log("sent")
})

function welcome() {
    console.log("hello")
}

function sendEmail() {
    console.log("Sent")
    var queryString = $('#sendemail').serialize();
    console.log(queryString)
}

function sendEmailFake(email, text) {
    console.log("Sentish")
    console.log(email, ", ", text)
}
 
