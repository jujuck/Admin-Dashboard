//Récuperer la valeur des élements
var text = "";
var equation;
var affichage = document.getElementById("affichage");

function jouer(val) {
    text += val;
    affichage.textContent = text;
    return text;
}


/*function sign(sign) {
    switch (sign) {
        case "plus":
            equation = text + "+";
            break;
        case "moins":
            equation = text + "-";
            break;
        case "fois":
            equation = text + "*";
            break;
        case "div":
            equation = text + "/";
            break;
        default:
            break;
    }
    return equation;
}*/

//Apliquer le calcul
function calculer() {
    var resultat = eval(text);
    console.log(resultat);
    affichage.textContent = resultat;
}

function reset() {
    window.location.reload();
}

//renvoyer le résultat


