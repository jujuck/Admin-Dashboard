//https://openweathermap.org/api

function findWeather() {
    console.log("ok")
    var city = document.getElementById('city').value
    if(city.length > 0) {
        var requestUrl = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&APPID=1ae0e05d29e5676b5e6ae70a74f6fef2'
        var request = new XMLHttpRequest();
        request.open('GET', requestUrl);
        request.responseType = 'json';
        request.send()

        request.onload = function() {
            var message = request.response.message
            if (message === "city not found") {
                alert("la ville n'est pas reconnue")
            } else {
                var temperature = document.getElementById('temperature')
                var hydrometrie = document.getElementById('hydrometrie')
                var meteo = document.getElementById('meteo')
                var tempValue = request.response.main.temp
                var hydroValue = request.response.main.humidity
                var meteoValue = request.response.weather[0].description

                var tempParagraphe = '<p>' + tempValue + '°C</p>'
                temperature.innerHTML = tempParagraphe;

                var humidityParagraphe = '<p>' + hydroValue + '%</p>'
                hydrometrie.innerHTML = humidityParagraphe

                var meteoParagraphe = '<p>' + meteoValue + '</p>'
                meteo.innerHTML = meteoParagraphe
            }
            console.log(request.response)
        }

    }
}

document.getElementById('titre').addEventListener('click', function() {
        findWeather();
})




//Url valid http://samples.openweathermap.org/data/2.5/find?q=Paris&units=metric&APPID=1ae0e05d29e5676b5e6ae70a74f6fef2