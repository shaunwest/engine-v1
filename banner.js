var colors = require('colors');

module.exports = function() {
  var lines = [
    '-----------------------------',
    '        ENGINE v1',
    '-----------------------------'
  ];

  lines.forEach(function(line) { console.log(line.bold.magenta) });
};
