var express = require('express');
var app = express();
var request = require('request');

app.get('/', function (req, res) {
    payload={"text": "This is a line of text in a channel.\nAnd this is another line of text."};

    var url = 'https://hooks.slack.com/services/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';
    var options = {
        method: 'post',
        body: payload,
        json: true,
        url: url
    };

    request(options, function (err, res, body) {
        if (err) {
            console.log('error');
        }
    });
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
