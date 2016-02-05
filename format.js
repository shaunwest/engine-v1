var format = require('./builder/format.js');

module.exports = Object.assign({}, format, {
    ACTIVITY: '⌛ ',
    SUCCESS: '😸 ',
    ERROR: '🙀 ',
    WARN: '😿 ',
    GO: '👉 ',
    VERBOSE: '📢 ',
    GENERIC: '😼 ',
    LINK: '🔗 '
});
