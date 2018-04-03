function sendConnexion() {
    document.getElementById("formulaire").innerHTML = "";
    var myRequestConnexion = new XMLHttpRequest();
    myRequestConnexion.open('GET', 'html/connexion.html');
    myRequestConnexion.onreadystatechange = function () {
        if (myRequestConnexion.readyState === 4) {
            document.getElementById("formulaire").innerHTML = myRequestConnexion.responseText;
        }
    };
    myRequestConnexion.send();
}

function sendInscription() {
    document.getElementById("formulaire").innerHTML = "";
    var myRequestInscription = new XMLHttpRequest();
    myRequestInscription.open('GET', 'html/inscription.html');
    myRequestInscription.onreadystatechange = function () {
        if (myRequestInscription.readyState === 4) {
            document.getElementById("formulaire").innerHTML = myRequestInscription.responseText;
        }
    };
    myRequestInscription.send();
}

