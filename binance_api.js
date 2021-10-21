//Documentation : https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md
var XMLHttpRequest = require('xhr2')

var base_url = "https://api.binance.com";
var query = "/api/v1/klines";
var timeframe = '15m'
query += '?symbol=BTCUSDT&interval='+timeframe+'&limit=5';

var url = base_url + query;
var request = new XMLHttpRequest();

request.open('GET',url,true);
request.send();
request.onreadystatechange = function(){
	var price_data = request.responseText;
	//console.log('price_data', price_data);
	return price_data;
}
console.log('price_data', price_data);