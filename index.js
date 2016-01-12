/*jshint esnext: true */
(function () {
    "use strict";
    const express = require('express');
    const request = require('request');
    const app = express();

    // Slack API Entry Point
    const url = 'https://hooks.slack.com/services/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';


    app.get('/', function (req, res) {
        let channel = req.query.channel;
        let username = req.query.username;
        let message = req.query.message;

        let payload = {
                    "channel" : channel,
                    "username": username,
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

      res.send('Posting Message: ' + message);
    });

    app.listen(3000, function () {
      console.log('Example app listening on port 3000!');
    });

}());
