/*jshint esnext: true */
(function () {
    "use strict";

    // Requirements
    const express = require('express');
    const data = require('./data.js');
    const commands = require('./commands.js');
    var bodyParser = require('body-parser');

    // Define Express
    const app = express();

    // Body Parser Setup
    app.use( bodyParser.json() );
    app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
       extended: true
    }));

    app.post('/api/', function (req, res) {
        console.log('reqest seen');
        let cmd = req.body.text;
        cmd = cmd.toLowerCase();
        let channel = req.body.channel_name;

        let responce;
        cmd = cmd.split(" ");
        if (cmd[1] === 'help') {
            responce = commands.help(cmd);
            commands.sendmessage(responce, channel);

        } else if (cmd[1] === 'add') {
            responce = commands.add(cmd);
            commands.sendmessage(responce, channel);

        } else if (cmd[1] === 'remove') {
            responce = commands.remove(cmd);
            commands.sendmessage(responce, channel);

        } else if (cmd[1] === 'random') {
            responce = commands.random(cmd);
            commands.sendmeme(responce, channel);

        } else {
            responce = commands.fetchmeme(cmd);
            commands.sendmeme(responce, channel);

        }
        //responce = {"text" : responce};
        //res.json(responce);
    });

    app.listen(3000, function () {
        console.log('Running: Localhost:3000');
    });
}());
