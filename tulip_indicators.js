const tulip = require('tulind');
const log = console.log;

const open  = require('./data').data.map(d => d[1]);
const high  = require('./data').data.map(d => d[2]);
const low   = require('./data').data.map(d => d[3]);
const close = require('./data').data.map(d => d[4]);

var indicator = 'RSI';

if (indicator == 'RSI'){
	tulip.indicators.rsi.indicator([close],[14], (err, res) => {
		if(err) {
			return log(err);
		}
		else{
			log(res[0].slice(-1)[0]);
		}
	})
}