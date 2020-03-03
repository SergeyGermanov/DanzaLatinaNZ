//Initialisation
require('newrelic');
var express = require("express");
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');


//Initialize port
app.set("port", process.env.PORT || 8080);

//Initialize folder
app.use(express.static(path.join(__dirname, 'public')));


//Start the site
app.get("/", function (req, res) {
    res.type("text/html");
    res.sendFile(__dirname + "/public/index.html");
});

var config = require('./public/js/text');

//Using bodyparser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

//Authentification to mail server
var smtpTransport = nodemailer.createTransport(smtpTransport({
    service: 'Gmail',
    auth: {
        user: config.mail + config.g,
        pass: config.door[1]+config.door[10]+config.door[11]+config.door[6]+config.door[9]+config.door[7]+config.door[2]+config.door[4]+config.door[5]
      
    }
}));


//Send email
app.post('/', function (req, res) {
    var door = req.body.code;
    var mailOptions = {
        from: config.mail + config.g, // sender address
        to: config.mail + config.g, // list of receivers
        subject: 'Name: ' + req.body.name, // Subject line
        text: req.body.message + ' Email: ' + req.body.email + ' Phone: ' + req.body.phone // plaintext body

    };
    smtpTransport.sendMail(mailOptions, function (error, info) {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });

    res.send(true);

});


//Run the whole thing on port 3000
app.listen(app.get('port'), function () {
    console.log('Express started on http://localhost:' + app.get('port'));
});