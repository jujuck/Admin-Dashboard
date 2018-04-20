var produitListe;
var Active = 'developpementWeb'

//Fonction de création des objets Projet
var createNewProduit = (nom, image, text, url="") => {
    produitListe += `<div class="col-2">`;
    produitListe += `<div class="item-produits">`
    produitListe += `<h3>${nom}</h3>`;
    produitListe += `<img class="image-produit" src="../${image}">`;
    produitListe += `<p>${text}</p>`;
    if (url.length > 0) {
        produitListe += `<button class="btn" onclick="window.open('${url})">Let s go!</button>`;
    }
    produitListe += `</div>`;
    produitListe += `</div>`;
    
    return produitListe;
}


//Fonction de mise à jour des onglets
var onglet = () => {
    var onglets = new Array(document.getElementsByClassName("onglet"))
    for (let onglet of onglets)/*(var i = 0; i < onglet.length; i++)*/ {
       if (onglet/*[i]*/.classList.contains("active")) {
           onglet/*[i]*/.classList.remove("active")
           }
    }
}


//initialisation de l'espace produit
var initProduit = (id) => {
    var myRequestProduit = new XMLHttpRequest();
    myRequestProduit.open('GET','../data/produit.json');

    myRequestProduit.onreadystatechange = function () {
        if(myRequestProduit.readyState === 4) {
            var produits = JSON.parse(myRequestProduit.responseText);
            produitListe = `<div class="container">`;

            for (let produit of produits) /*(var i = 0; i < produits.length; i++)*/ {
                if(produit/*s[i]*/.menu === id) {
                    
                    createNewProduit(produit/*s[i]*/.name, produit/*s[i]*/.image, produit/*s[i]*/.text, produit.url)
                }
            }
        }
        produitListe += '</div>';
        document.getElementById("produit").innerHTML = produitListe;
        
        //Mise à jour de l'affichage Onglet
        document.getElementById(Active).classList.remove('active')
        document.getElementById(id).classList.add("active")
        Active = id
   };
    myRequestProduit.send();
}
initProduit('developpementWeb');


//Script pour menu hamburger
var menu = document.getElementById("menu-responsive");
document.getElementById("img-menu").addEventListener("mouseover", function (e) {
    menu.style.display = "inline";
    setTimeout(function() {
    menu.style.display = "none";
    }, 4000);
})


