const Promise = require('bluebird');
const kbyte = require('kbyte');

Promise.promisifyAll(kbyte.Client.prototype);
const client = new kbyte.Client(process.env.VUE_APP_WS_API_URI);

module.exports = client;
