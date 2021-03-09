//Required node.js modules are nodemailer and socket.io
const express = require('express');
const app = require('express')();
const server = require('http').Server(app);
const nodemailer = require('nodemailer'); 
const username = "";//Add your own values here
const password = "";//Add your own values here
const io = require('socket.io')(server);
const encrypt = require('socket.io-encrypt')
io.use(encrypt('secret'))

app.use(express.static('public'))
server.listen(8080)

//Source for email
var transporter = nodemailer.createTransport({
    service: 'outlook',
    auth: {
        user: username,
        pass: password
    }
})

//function used to send receipt email to recipient
function sendEmail(recipient, subject, text) {
    var mailOptions = {
        from: username,
        to: recipient,
        subject: subject,
        text: text
    }
    
    transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
    })
}


//Getting form info from user 
io.on('connection', function(socket) {
 
    socket.on('message', data)
    socket.on('error', console.error)

    console.log(data)
 
})