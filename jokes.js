
/*jshint esnext: true */
(function () {
    "use strict";

    // Requirements
    const request = require('request');

    // Database Functions
    const Jokes = (function () {

        // yomama
        let yomama = function () {
            const url = "http://api.yomomma.info/";
            request({
                url: url,
                json: true
            }, function (error, response, body) {
                console.log(body.joke);
                return body.joke;
            });
        };

        // returns
        return { yomama, };
    }());

    //exports
    module.exports = Jokes;
}());
