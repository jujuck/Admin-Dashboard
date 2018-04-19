//Récuperer la valeur des élements
var text = "";
var equation;
var affichage = document.getElementById("affichage");

//stockage des valeurs
function jouer(val) {
    text += val;
    affichage.textContent = text;
    return text;
}

//Apliquer le calcul
function calculer() {
    var resultat = eval(text);
    affichage.textContent = resultat;
}


//Reset l'affichage
function reset() {
    affichage = '';
}




