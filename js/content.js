//Mise en place des espaces de descritpion des produits
function initProduit () {
    var myRequestProduit = new XMLHttpRequest();
    myRequestProduit.open('GET','../data/produit.json');

    myRequestProduit.onreadystatechange = function () {
        if(myRequestProduit.readyState === 4) {
            var produits = JSON.parse(myRequestProduit.responseText);
            var produitListe = '<div class="container">';

            for (var i = 0; i < produits.length; i++) {
                if(produit[i].menu === "developpementWeb") {
                    produitListe += '<div class="col-2">';
                    produitListe += '<div class="item-produits"'
                    produitListe += '<h3>' + produits[i].name + '</h3>';
                    produitListe += '<img class="image-produit" src="../' + produits[i].image + '">';
                    produitListe += '<p>' + produits[i].text + '</p>';
                    produitListe += '<button class="btn">Let s go!</button>';
                    produitListe += '</div>';
                    produitListe += '</div>';
                }
            }
        }
        produitListe += '</div>';
        document.getElementById("produit").innerHTML = produitListe;
   };
    myRequestProduit.send();
}

initProduit();

//Script pour menu hamburger
var menu = document.getElementById("menu-responsive");
document.getElementById("img-menu").addEventListener("mouseover", function (e) {
    menu.style.display = "inline";
    setTimeout(function() {
    menu.style.display = "none";
    }, 4000);
})


