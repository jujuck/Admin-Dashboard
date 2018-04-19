function findFilm() {
    
    var movie = document.getElementById('movie').value
    if(movie.length > 0) {
        var requestUrl = 'http://www.omdbapi.com/?t=' + movie + '&apikey=dfbb3f29'
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

                var titreParagraphe = '<p>Titre : ' + titreValue + '</p>'
                titre.innerHTML = titreParagraphe;

                var yearParagraphe = '<p>Année de production : ' + yearValue + '</p>'
                year.innerHTML = yearParagraphe

                var releasedParagraphe = '<p>Année de parution :' + releasedValue + '</p>'
                released.innerHTML = releasedParagraphe

                var dureeParagraphe = '<p>Durée du film : ' + dureeValue + '</p>'
                duree.innerHTML = dureeParagraphe;

                var genreParagraphe = '<p>Genre : ' + genreValue + '</p>'
                genre.innerHTML = genreParagraphe

                var directorParagraphe = '<p> Directeur : ' + directorValue + '</p>'
                director.innerHTML = directorParagraphe
            }
        }
    }
    
}

document.getElementById('cinema').addEventListener('click', function() {
        findFilm();
})




//Url valid http://samples.openweathermap.org/data/2.5/find?q=Paris&units=metric&APPID=1ae0e05d29e5676b5e6ae70a74f6fef2