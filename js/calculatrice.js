//Récuperer la valeur des élements
var text = "";
var equation;
var affichage = document.getElementById("affichage");

//stockage des valeurs
var jouer = val => {
    affichage.textContent += val;
    return affichage;
}

//Apliquer le calcul
var calculer = () => {
    affichage.textContent = eval(affichage.textContent);
    return affichage;
}


//Reset l'affichage
var reset = () => {
    affichage.textContent = "";
    return affichage;
}




