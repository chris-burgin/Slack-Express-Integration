/*jshint esnext: true */
(function () {
    "use strict";
    // Requirements
    const fs = require('fs');

    // Database Functions
    const Data = (function () {
        let fetchdata = function() {
            return JSON.parse(fs.readFileSync('data/data.json', 'utf8'));
        };

        let save = function(newobject, remove) {
            remove = !!remove;
            let string;
            if (remove === false) {
                string = JSON.stringify(merge(newobject));
            } else if (remove === true) {
                string = JSON.stringify(newobject);
            }

            fs.writeFile('data/data.json', string, function(err) {});
        };

        let merge = function(newobject) {
            let oldobject = fetchdata();
            return oldobject.concat(newobject);
        };

        let nextid = function() {
            let object = fetchdata();
            return object[object.length - 1].id + 1;
        };

        let uniquename = function(name) {
            let object = fetchdata();
            for (let i = 0; i < object.length; i++) {
                if (name === object[i].name) {
                    return false;
                }
            }
            return true;
        };

        return {
            fetchdata, save, merge, nextid, uniquename
        };
    }());
    module.exports = Data;
}());
