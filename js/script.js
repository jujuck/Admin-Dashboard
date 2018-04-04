var header = document.getElementById("header");
var formulaire = document.getElementById("formulaire");



document.getElementById("sendConnexion").addEventListener("click", function (e) {
    //formulaire.content= "";
    var myRequestConnexion = new XMLHttpRequest();
    myRequestConnexion.open('GET', 'html/connexion.html');
    myRequestConnexion.onreadystatechange = function () {
        if (myRequestConnexion.readyState === 4) {
            header.style.height = "160px";
            formulaire.style.display = "inline";
            formulaire.style.height = "200px";
            formulaire.innerHTML = myRequestConnexion.responseText;
        }
    };
    myRequestConnexion.send();
});

/*document.getElementById("nationalite").addEventListener("change", function(e) {
    console.log("Code de nationalité : " + e.target.value);
});*/
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
            header.style.height = "200px";
            formulaire.style.display = "inline";
            formulaire.style.height = "200px";
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

