//https://fixer.io/quickstart

// set endpoint and your API key
var url = 'http://data.fixer.io/api/latest?access_key=37447497a073e7ec16a280d417041595&base=EUR&symbols=USD,JPY,GBP,EUR'

// define from currency, to currency, and amount
/*from = 'EUR';
to = 'GBP';
amount = '10';
*/

// execute the conversion using the "convert" endpoint:
/*function recupererValeur() {
    $.ajax({
        url: url,  
        dataType: 'jsonp',
        success: function(res) {
*/            
var recupererValeur = () => {
    var requestUrl = 'http://data.fixer.io/api/latest?access_key=37447497a073e7ec16a280d417041595&base=EUR&symbols=USD,JPY,GBP,EUR'
    var request = new XMLHttpRequest();
    request.open('GET', requestUrl);
    request.responseType = 'json';
    request.send()
    
    request.onload = function() {
        
            var rates = request.response.rates
            var amount = document.getElementById("fromAmount").value
            var from = document.getElementById("from").value
            var to = document.getElementById("to").value
            
            var toAmount = ((amount*rates[to])/rates[from]).toFixed(2)
            document.getElementById("toAmount").value = toAmount

    }
}


