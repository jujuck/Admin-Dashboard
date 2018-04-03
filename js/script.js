var header = document.getElementById("header");
var formulaire = document.getElementById("formulaire");



function sendConnexion() {
    //formulaire.content= "";
    var myRequestConnexion = new XMLHttpRequest();
    myRequestConnexion.open('GET', 'html/connexion.html');
    myRequestConnexion.onreadystatechange = function () {
        if (myRequestConnexion.readyState === 4) {
            header.style.height = "220px";
            formulaire.style.display = "inline";
            formulaire.style.height = "200px";
            formulaire.innerHTML = myRequestConnexion.responseText;
        }
    };
    myRequestConnexion.send();
}

function sendInscription() {
    formulaire.content = "";
    var myRequestInscription = new XMLHttpRequest();
    myRequestInscription.open('GET', 'html/inscription.html');
    myRequestInscription.onreadystatechange = function () {
        if (myRequestInscription.readyState === 4) {
            header.style.height = "100px";
            formulaire.style.display = "inline";
            formulaire.style.height = "300px";
            formulaire.innerHTML = myRequestInscription.responseText;
        }
    };
    myRequestInscription.send();
}

function sendForgotMdp() {
    formulaire.content = "";
    var myRequestForgotMdp = new XMLHttpRequest();
    myRequestForgotMdp.open('GET', 'html/forgotMdp.html');
    myRequestForgotMdp.onreadystatechange = function () {
        if (myRequestForgotMdp.readyState === 4) {
            header.style.height = "150px";
            formulaire.style.display = "inline";
            formulaire.style.height = "300px";
            formulaire.innerHTML = myRequestForgotMdp.responseText;
        }
    };
    myRequestForgotMdp.send();
}

function sendAccueil() {
    formulaire.content = "";
    header.style.height = "400px";
    formulaire.style.display = "none";
}

