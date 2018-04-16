var header = document.getElementById("header");
var formulaire = document.getElementById("formulaire");

var connexion = document.getElementById("connexion");
var inscription = document.getElementById("inscription");
var forgotMDP = document.getElementById("forgotMDP");

var header = document.getElementById("header");
var formulaire = document.getElementById("formulaire");
var id = "";
var connexion;

/*
//Partie 1 chargement des scripts en requete HTML
//Chargement du fichier js correspondant
function loadScript(connexion, id) {
    // Check for existing script element and delete it if it exists
    var js = document.getElementById(id);
    if(js !== null) {
        document.body.removeChild(js);
        console.info("---------- Script refreshed ----------");
    }

    // Create new script element and load a script into it
    js = document.createElement("script");
    js.src = connexion;
    js.id = id;
    document.body.appendChild(js);
}

//Chargement de l'espace COnnexion sur la page d'accueil
document.getElementById("sendConnexion").addEventListener("click", function (e) {
    //formulaire.content= "";
    var myRequestConnexion = new XMLHttpRequest();
    myRequestConnexion.open('GET', 'html/connexion.html');
    myRequestConnexion.onreadystatechange = function () {
        if (myRequestConnexion.readyState === 4) {
            header.style.height = "250px";
            formulaire.style.display = "inline";
            formulaire.style.height = "150px";
            formulaire.innerHTML = myRequestConnexion.responseText;
        }
    };
    connexion = 'js/connexion.js';
    id = 'connexionScript';
    loadScript(connexion, id)
    myRequestConnexion.send();
});

//Chargement de l'espace Inscription sur la page d'accueil
document.getElementById("sendInscription").addEventListener("click", function(e) {
    formulaire.content = "";
    var myRequestInscription = new XMLHttpRequest();
    myRequestInscription.open('GET', 'html/inscription.html');
    myRequestInscription.onreadystatechange = function () {
        if (myRequestInscription.readyState === 4) {
            header.style.height = "250px";
            formulaire.style.display = "inline";
            formulaire.style.height = "150px";
            formulaire.innerHTML = myRequestInscription.responseText;
        }
    };
    connexion = 'js/inscription.js';
    id = 'inscriptionScript';
    loadScript(connexion, id)
    myRequestInscription.send();

});


//Chargement de l'espace Mot de Passe oublié sur page d'Accueil
function sendForgotMdp() {
    formulaire.content = "";
    var myRequestForgotMdp = new XMLHttpRequest();
    myRequestForgotMdp.open('GET', 'html/forgotMdp.html');
    myRequestForgotMdp.onreadystatechange = function () {
        if (myRequestForgotMdp.readyState === 4) {
            header.style.height = "250px";
            formulaire.style.display = "inline";
            formulaire.style.height = "150px";
            formulaire.innerHTML = myRequestForgotMdp.responseText;
        }
    };
    connexion = 'js/forgotMDP.js';
    id = 'forgotMDPScript';
    loadScript(connexion, id)
    myRequestForgotMdp.send();
}
//Fin du chargement en Requet HTML*/

//Remise à zéro de l'affichage
function sendAccueil() {
    formulaire.content = "";
    header.style.height = "400px";
    formulaire.style.display = "none";
}


//Partie 2 : affiahcge des formulaires par classe : display
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


//PArtie 3 vérification de la connexion
//Vérification du formulaire de connexion
var validID = false;
var users = [""]
var userConnexion = document.getElementById("usernameConnexion");
var passwordConnexion = document.getElementById("passwordConnexion");

//Chargement du fichier JSon et vérification utilisateur
function login(utilisateur, motDePasse) {
    var myRequestUser = new XMLHttpRequest();
    myRequestUser.open('GET', '../data/users.json');

    myRequestUser.onreadystatechange = function () {
        if(myRequestUser.readyState === 4) {
            users = JSON.parse(myRequestUser.responsetext);   
            }
        }

    myRequestUser.send();
    
    for (i = 0; i < users.length; i++) {
        if(utilisateur === users[i].username && motDePasse === users[i].password) {
            return true;
        } 
    } return false;
}

//Lancement de la fonction
function verificationUser() {
    if (login(userConnexion, passwordConnexion)) {
        window.location.href = 'dashboard.html';
    } else {
        return console.log("Accès refusé")
    }
}


//Partie 4 : vérification inscription
//validate password 
document.getElementById("passwordInscription").addEventListener("input", function (e) {
    console.log("ok");
	var password = e.target.value;
	var passwordLength = "weak";
	var messageColor = "black";
	var passwordRegexLetter = /[A-Z]/;
	var passwordRegexNumber = /[1-9]/;
	var strength = 0;
	var Letter = "Capital letter: checked";
	var Nombre = "Number: checked";

	//Calcul de la force du mot de passe
	if (passwordRegexLetter.test(e.target.value) === true) {
		strength += 2;
	} else {
		var Letter = "must have at least one capital Letter";
	};

	if (passwordRegexNumber.test(e.target.value) === true) {
		strength += 2;
	} else {
		var Nombre = "must have at least one number";
	};

	strength += password.length;

	//Affichage des différents cas
	if (strength > 12) {
		passwordLength = "Very Strong";
		messageColor = "green";
	} else if (strength >= 10)  {
		passwordLength = "Strong";
		messageColor = "yellow";
	} else if (strength >= 8) {
		passwordLength = "Medium";
		messageColor = " orange";
	} else if (strength >= 6) {
		passwordLength = "Poor";
		messageColor = "red";
	}

	var passwordHelpElement = document.getElementById("passwordHelp");
	passwordHelpElement.textContent = "Strength: " + passwordLength + ", " + Letter + ", " + Nombre;
	passwordHelpElement.style.color = messageColor;
});
