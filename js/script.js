var header = document.getElementById("header");
var formulaire = document.getElementById("formulaire");

var connexion = document.getElementById("connexion");
var inscription = document.getElementById("inscription");
var forgotMDP = document.getElementById("forgotMDP");

var header = document.getElementById("header");
var formulaire = document.getElementById("formulaire");

//Partie 2 : affichage des formulaires par classe : display
//Chargement de l'espace Connexion sur la page d'accueil
document.getElementById("sendConnexion").addEventListener('click', function() {
    connexion.classList.remove("hidden");
    if (inscription.classList.contains('hidden') === false) {
        inscription.classList.add('hidden')
    }  
    if (forgotMDP.classList.contains('hidden')) {
        forgotMDP.classList.add('hidden')
    }
})

//Chargement de l'espace inscription sur la page d'accueil
document.getElementById("sendInscription").addEventListener('click', function() {
    inscription.classList.remove("hidden");
    if (connexion.classList.contains('hidden') === false) {
        connexion.classList.add('hidden')
    }
    if (forgotMDP.classList.contains('hidden')) {
        forgotMDP.classList.add('hidden')
    }
})


//Chargement de l'espace Mot de Passe oublié sur page d'Accueil


