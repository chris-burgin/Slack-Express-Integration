
/*jshint esnext: true */
(function () {
    "use strict";

    // Requirements
    const request = require('request');
    const commands = require('./commands.js');

    // Database Functions
    const Jokes = (function (channel) {

        // yomama
        let yomama = function (channel) {
            const url = "http://api.yomomma.info/";
            let joke;
            request({
                url: url,
                json: true
            }, function (error, response, body) {
                commands.send(body.joke, channel);
            });
        };

        // returns
        return { yomama, };
    }());

    //exports
    module.exports = Jokes;
}());
