var header = document.getElementById("header");
var formulaire = document.getElementById("formulaire");



function sendConnexion() {
    //formulaire.content= "";
    var myRequestConnexion = new XMLHttpRequest();
    myRequestConnexion.open('GET', 'html/connexion.html');
    myRequestConnexion.onreadystatechange = function () {
        if (myRequestConnexion.readyState === 4) {
            header.style.height = "200px";
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
            document.getElementById("formulaire").innerHTML = myRequestInscription.responseText;
        }
    };
    myRequestInscription.send();
}

