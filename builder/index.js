/*
 * index.js
 */

var colors = require('colors');
var webpackBuilder = require('./builder.js');

require('./console.js')();

function startProd(options) {
    var config = require('./webpack-prod-config.js'),
        EXTERNAL_CSS = true,
        ASSET_URL = '';

    webpackBuilder.compile({
        config: config
    }, function onReady(err) {
        if (err) {
            console.warn(error.stack);
        }
    });
}

function startDev(options) {
    var config = require('./webpack-dev-config.js'),
        externalCss = options.externalCss,
        loud = options.loud;

    // Show some useful messaging
    console.success('Hello! Hit Ctrl+C to exit at any time');

    if (externalCss) {
        console.link('External CSS linking is active');
    }

    if (loud) {
        console.verbose('Loud mode active');
    }

    // Start the webpack dev server
    webpackBuilder.watch({
        config: config,
        externalCss: externalCss,
        loud: loud
    },
    function onReady(err) {
        if (err) {
            console.warn(error.stack);
        }
        else {}
    });
}


module.exports = {
    prod: startProd,
    dev: startDev
};
