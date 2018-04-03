function sendConnexion() {
    document.getElementById(Formulaire).innerHTML = "";
    var myRequestConnexion = new XMLHttpRequest();
    myRequestConnexion.open('GET', 'html/connexion.html');
    myRequestConnexion.onreadystatechange = function () {
        if (myRequestConnexion.readyState === 4) {
            document.getElementById(formulaire).innerHTML = myRequestConnexion.responseText;
        }
    };
    myRequestConnexion.send();
}

sendConnexion();