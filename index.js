/*jshint esnext: true */
(function () {
    "use strict";

    // Requirements
    const express = require('express');
    var bodyParser = require('body-parser');

    // Modules
    const data = require('./data.js');
    const commands = require('./commands.js');
    const jokes = require('./jokes.js');

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
        cmd = cmd.split(" ");

        let channel = req.body.channel_name;

        let responce;
        if (cmd[1] === 'jokes') {
            // Jokes Send Their Own Responce
            if (cmd[2] === 'yomama'){
                jokes.yomama(channel);
            }
        } else {
            // memes
            if (cmd[1] === 'help') {
                responce = commands.help(cmd);
            } else if (cmd[1] === 'add') {
                responce = commands.add(cmd);
            } else if (cmd[1] === 'remove') {
                responce = commands.remove(cmd);
            } else if (cmd[1] === 'random') {
                responce = commands.random(cmd);
            } else {
                responce = commands.fetchmeme(cmd);
            }
            // Return Meme Responce
            commands.send(responce, channel);
        }

    });

    app.listen(3000, function () {
        console.log('Running: Localhost:3000');
    });
}());
