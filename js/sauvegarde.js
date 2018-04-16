var header = document.getElementById("header");
var formulaire = document.getElementById("formulaire");
var id = "";
var connexion;

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

//Remise à zéro de l'affichage
function sendAccueil() {
    formulaire.content = "";
    header.style.height = "400px";
    formulaire.style.display = "none";
}