const SSC = require('sscjs');

const ssc = new SSC(process.env.VUE_APP_CHAIN_URL);
ssc.stream((err, res) => {
	console.log(err, res);
});

module.exports = ssc;
