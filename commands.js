/*jshint esnext: true */
(function () {
    "use strict";

    // Requirements
    const request = require('request');
    const data = require('./data.js');

    // Slack API Entry Point
    const url = 'https://hooks.slack.com/services/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';


    // Database Functions
    const Commands = (function () {

        let send = function(message, channel) {

            let payload = {
                        "channel" : "#" + channel,
                        "username": 'memz bot',
                        "text": message
                      };

            let options = {
                method: 'post',
                body: payload,
                json: true,
                url: url
            };

            request(options, function (err, res, body) {
                if (err) {
                    console.log(err);
                }
            });

            console.log(message);
        };

        // Help
        // declare -- cmd
        let help = function(cmd) {
            return 'help command';
        };

        // Add
        // declare -- cmd -- name -- url -- category
        let add = function(cmd) {
            if (data.uniquename(cmd[2])) {
                let meme = { "id" : data.nextid(),
                             "url" : cmd[3],
                             "name" : cmd[2],
                             "category" : cmd[4] };
                data.save(meme);
                return "Memz " + cmd[2] + "Added \nUse 'memz " + cmd[2] + "'";
            } else {
                return "Error: Please Provide A Unique Name";
            }
        };

        // Remove
        // declare -- cmd -- name
        let remove = function(cmd) {
            let object = data.fetchdata();
            for (let i = 0; i < object.length; i++) {
                if (cmd[2] === object[i].name) {
                    object.splice(i , 1);
                    break;
                }
            }
            data.save(object, true);
        };

        // Random
        // declare -- cmd -- *category*
        let random = function(cmd) {
            let object = data.fetchdata();
            let length = object.length;
            let rand = Math.floor(Math.random() * length, + 1);
            return object[rand].url;
        };

        // FetchMeme
        let fetchmeme = function(cmd) {
            let object = data.fetchdata();
            for (let i = 0; i < object.length; i++) {
                if (cmd[1] === object[i].name) {
                    return object[i].url;
                }
            }
            return 'Error: No meme by the name ' + cmd[1];
        };

        return { send, help, add, remove, random, fetchmeme, };
    }());
    module.exports = Commands;
}());
