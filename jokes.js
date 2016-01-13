
/*jshint esnext: true */
(function () {
    "use strict";

    // Requirements
    const request = require('request');
    const commands = require('./commands.js');

    // Database Functions
    const Jokes = (function (channel) {

        // yomama
        let yomama = function (cmd, channel) {
            const url = "http://api.yomomma.info/";
            let joke;
            request({
                url: url,
                json: true
            }, function (error, response, body) {
                commands.send(body.joke, channel);
            });
        };

        // chuck
        let chuck = function (cmd, channel) {
            const url = "http://api.icndb.com/jokes/random";
            let joke;
            request({
                url: url,
                json: true
            }, function (error, response, body) {
                commands.send(body.value.joke, channel);
            });
        };

        // returns
        return { yomama, chuck, };
    }());

    //exports
    module.exports = Jokes;
}());
