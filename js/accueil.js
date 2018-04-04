//Mise en place des espaces de descritpion des produits
function initProduit () {
    /*var myRequestProduit = new XMLHttpRequest();
    myRequestProduit.open('GET','../data/produit.json');

    myRequestProduit.onreadystatechange = function () {
        if(myRequestProduit.readyState === 4) {
            var produits = JSON.parse(myRequestProduit.responseText);*/
            var produitListe = '<div class="container">';

            for (var i = 0; i < 12; i++) {
                produitListe += '<div class="col-2">';
                produitListe += '<div class="item-produits"'
                produitListe += '<h3>HTML5</h3>';
                /*produitListe += '<img class="image-produit" src="' + produits[i].image + '">';*/
                produitListe += '<p>Circa hos dies Lollianus primae lanuginis adulescens, Lampadi filius ex praefecto, exploratius causam Maximino spectante, convictus codicem noxiarum artium nondum per aetatem firmato consilio descripsisse,</p>';
                produitListe += '<button class="btn">Let s go!</button>';
                produitListe += '</div>';
                produitListe += '</div>';
                
            }
        /*}*/
        produitListe += '</div>';
        document.getElementById("produit").innerHTML = produitListe;
   /*};
    myRequestProduit.send();*/
}

initProduit();