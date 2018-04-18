function findWeather() {
    
    var film = document.getElementById('film').value
    if(film.length > 0) {
        var requestUrl = 'http://www.omdbapi.com/?t=' + film + '&apikey=dfbb3f29'
        var request = new XMLHttpRequest();
        request.open('GET', requestUrl);
        request.responseType = 'json';
        request.send()

        request.onload = function() {
            var message = request.response.Error
            
            if(message === "Movie not found!") {
                alert("Ce film n'est pas connu")
            } else {
                var titre = document.getElementById('Titre')
                var year = document.getElementById('Year')
                var released = document.getElementById('Released')
                var duree = document.getElementById('Duree')
                var genre = document.getElementById('Genre')
                var director = document.getElementById('Director')
                var titreValue = request.response.Title
                var yearValue = request.response.Year
                var releasedValue = request.response.Released
                var dureeValue = request.response.Runtime
                var genreValue = request.response.Genre
                var directorValue = request.response.Director

                var titreParagraphe = '<p>' + titreValue + '°C</p>'
                titre.innerHTML = titreParagraphe;

                var yearParagraphe = '<p>' + yearValue + '%</p>'
                year.innerHTML = yearParagraphe

                var releasedParagraphe = '<p>' + releasedValue + '</p>'
                released.innerHTML = releasedParagraphe

                var dureeParagraphe = '<p>' + dureeValue + '°C</p>'
                duree.innerHTML = dureeParagraphe;

                var genreParagraphe = '<p>' + genreValue + '%</p>'
                genre.innerHTML = genreParagraphe

                var directorParagraphe = '<p>' + directorValue + '</p>'
                director.innerHTML = directorParagraphe
            }
        }
    }
    
}

document.getElementById('titre').addEventListener('click', function() {
        findWeather();
})




//Url valid http://samples.openweathermap.org/data/2.5/find?q=Paris&units=metric&APPID=1ae0e05d29e5676b5e6ae70a74f6fef2