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

    app.post('/api/', function (req, res) {

        let cmd = req.body.text;
        let channel = req.body.channel;

        let responce;
        cmd = cmd.split(" ");
        if (cmd[1] === 'help') {
            responce = commands.help(cmd);
        } else if (cmd[1] === '--add') {
            responce = commands.add(cmd);
        } else if (cmd[1] === '--remove') {
            responce = commands.remove(cmd);
        } else if (cmd[1] === '--random') {
            responce = commands.random(cmd);
        } else {
            responce = commands.fetchmeme(cmd);
        }

        commands.send(responce);
        res.send(responce, channel);
    });

    app.listen(3000, function () {
        console.log('Running: Localhost:3000');
    });
}());
