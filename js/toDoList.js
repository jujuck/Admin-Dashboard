//définition des variables
var typeItem = document.getElementById("typeItem").value
,   titreDeLaTache = document.getElementById("titreDeLaTache").value
,   priotiteItem = document.getElementById("prioriteItem").value
,   statutItem = document.getElementById("statutItem").value
,   ajouter = document.getElementById("ajouter")
,   ToDoList = document.getElementById("toDoList")
,   index = 0
,   tableau = ""
,   sousItemIndex = 1

//vérification de l'entree d'une valeur
var titreLength = function() {
    return titreDeLaTache.length;
}

//Initialisation des valeurs pour une nouvelle entrée
function initNewValue() {
    typeItem = document.getElementById("typeItem").value
    titreDeLaTache = document.getElementById("titreDeLaTache").value
    priotiteItem = document.getElementById("prioriteItem").value
    statutItem = document.getElementById("statutItem").value
    ajouter = document.getElementById("ajouter")
    ToDoList = document.getElementById("toDoList")
}


//Fonction de création du HTML
function createListeElement() {
    //initialisation des valeurs
    initNewValue()
    
    //création des éléments
    var listItem = document.createElement("div")
    listItem.classList.add('elementGlobal')
    listItem.setAttribute('id', `elementGlobal ${index}`)/*'elementGlobal' + index*/
    
    var titreItem = document.createElement("div")
    titreItem.classList.add('titreItem')
    titreItem.setAttribute('id', 'TitreItem')
    
    tableau = document.createElement("table")
    tableau.classList.add('tableList')
    
    //Mise en place de la partie Centrale
    var row1 = document.createElement("tr")
    row1.classList.add('rowItem')
    
    var columnIcon = document.createElement("td")
    columnIcon.classList.add('columnIcon')
    columnIcon.classList.add(typeItem)
    
    var columnTitre = document.createElement("td")
    columnTitre.textContent = titreDeLaTache
    columnTitre.classList.add('columnTitre')
    
    var columnPriorite = document.createElement("td")
    columnPriorite.classList.add(priotiteItem)
    columnPriorite.classList.add('columnPriorite')
    columnPriorite.setAttribute('onClick', `modifPriorite ${index}`) /*'modifPriorite(' + index + ')'*/
    columnPriorite.setAttribute('id', 'item' + index)
    
    var columnStatut = document.createElement("td")
    columnStatut.textContent = statutItem
    columnStatut.classList.add('columnStatut')
    columnStatut.setAttribute('onClick', `modifStatut ${index}`) /*'modifStatut(' + index + ')')*/
    columnStatut.setAttribute('id', `statut ${index}`)/*'statut' + index)*/

    var columnAjoutItem = document.createElement("td")
    columnAjoutItem.classList.add('columnAjoutItem')
    columnAjoutItem.setAttribute('onClick', `ajoutItem ${index}`)/*'ajoutItem(' + index + ')')*/
    
    var columnTrash = document.createElement("td")
    columnTrash.classList.add('columnTrash')
    columnTrash.setAttribute('onClick', `supprimerItem ${index}`)/*'supprimerItem(' + index + ')')*/
    
    //Mise en place de l'ajout d'element secondaire
    var row2 = document.createElement("tr")
    row2.classList.add('rowItem')
    row2.setAttribute('id', `row2Item ${index}`)/* 'row2Item' + index)*/
    
    var columnAjoutItem = document.createElement("td")
    columnAjoutItem.textContent = "+ ajout d'élément secondaire..."
    columnAjoutItem.classList.add('columnAjoutItem')
    columnAjoutItem.setAttribute('onClick', `affichageAjoutItem ${index}`)/*'affichageAjoutItem(' + index + ')')*/
    columnAjoutItem.colSpan = "5"
    
    var row3 = document.createElement("tr")
    row3.classList.add('rowItem')
    row3.classList.add('hidden')
    row3.setAttribute('id', `row3Item ${index}`)/*'row3Item' + index)*/
    
    var columnAjoutItemInputText = document.createElement("td")
    columnAjoutItemInputText.colSpan = "2"
    columnAjoutItemInputText.textContent = "Element à ajouter"
    columnAjoutItemInputText.classList.add('columnAjoutItem')
    
    var columnAjoutItemInputValue = document.createElement("td")
    columnAjoutItemInputValue.colSpan = "2"
    columnAjoutItemInputValue.classList.add('columnAjoutItem')
    
    var columnInput = document.createElement('input')
    columnInput.classList.add('columnAjoutItemInput')
    columnInput.setAttribute('id', `valueItem ${index}`)/*'valueItem' + index)*/
    
    var columnAjoutItemInputOk = document.createElement("td")
    columnAjoutItemInputOk.colSpan = "1"
    columnAjoutItemInputOk.textContent = "Ok"
    columnAjoutItemInputOk.classList.add('columnAjoutItem')
    columnAjoutItemInputOk.setAttribute('onClick', `ajoutItemOk ${index}`)/*'ajoutItemOk(' + index + ')')*/
    
    //Distribution des enfants en HTML
    row1.appendChild(columnIcon)
    row1.appendChild(columnTitre),
    row1.appendChild(columnPriorite)
    row1.appendChild(columnStatut)
    row1.appendChild(columnTrash)
    tableau.appendChild(row1)
    
    row2.appendChild(columnAjoutItem)
    tableau.appendChild(row2)
    
    columnAjoutItemInputValue.appendChild(columnInput)
    row3.appendChild(columnAjoutItemInputText)
    row3.appendChild(columnAjoutItemInputValue)
    row3.appendChild(columnAjoutItemInputOk)
    tableau.appendChild(row3)
    
    titreItem.appendChild(tableau)
    listItem.appendChild(titreItem)
    ToDoList.appendChild(listItem)
    
    index++;
}

//Lancement de la fonction de création par Event
document.getElementById("ajouter").addEventListener('click', function() {
    if(titreLength() > 0) {
        initNewValue()
        createListeElement();
    }
})
    
ajouter.addEventListener('keypress', function(event) {
    if(titreLength() > 0 && event.keycode === 13) {
        initNewValue()
        createListeElement();
    }
})


//Fonction de suppression d'un élément
function supprimerItem(reference) {
    var supprimElement = document.getElementById("elementGlobal" + reference)
    supprimElement.remove()
}

//Fonction d'ajout d'élements secondaires
function affichageAjoutItem(reference) {
    document.getElementById("row2Item" + reference).classList.add('hidden')
    document.getElementById("row3Item" + reference).classList.remove('hidden')
}

function ajoutItemOk(reference) {
    
    var element = document.getElementById("valueItem" + reference).value
    
    //création de l'element
    var row4 = document.createElement("tr")
    row4.classList.add('rowItem')
    row4.setAttribute('id', 'row4Item' + sousItemIndex)
    
    var columnItemSecond = document.createElement("td")
    columnItemSecond.textContent = element
    columnItemSecond.classList.add('columnItemSecond')
    columnItemSecond.colSpan = "4"
    
    var columnItemSecondValid = document.createElement("td")
    columnItemSecondValid.textContent = "fait"
    columnItemSecondValid.classList.add('columnItemSecond')
    columnItemSecondValid.setAttribute('onClick', `itemDone ${sousItemIndex}`)/*'itemDone(' + sousItemIndex + ')')*/
    columnItemSecondValid.colSpan = "1"
    
    row4.appendChild(columnItemSecond)
    row4.appendChild(columnItemSecondValid)
    tableau.appendChild(row4)
    
    //Reinitialisation de l'affichage
    document.getElementById("row3Item" + reference).classList.add('hidden')
    document.getElementById("row2Item" + reference).classList.remove('hidden')
    
    //Incrémentation des sous items
    sousItemIndex++
}

//BArré les sous elements fait
function itemDone(indexItem) {
    var sousItem = document.getElementById("row4Item" + indexItem)
    sousItem.classList.add('barre')
}

//Modification des priorité
function miseAJourPriorite(classPriorite) {
    //mise à jour de la couleur
    itemCouleur.removeAttribute("class")
    itemCouleur.classList.add(classPriorite)
    itemCouleur.classList.add('columnPriorite')
}

function modifPriorite(reference) {
    var itemCouleur = document.getElementById("item" + reference)
    var couleur = prompt("Quel priorité voulez vous : Très Forte, Forte, Moyenne, Faible ou très Faible?")
    couleur = couleur.toLowerCase()
    var classPriorite = ""
    console.log('Item')
    
    //Définition de la class couleur
    switch (couleur) {
        case 'tres forte' :
            classPriorite = 'red';
            miseAJourPriorite(classPriorite);
            break;
        case 'forte' :
            classPriorite = 'orange';
            miseAJourPriorite(classPriorite);
            break;
        case 'moyenne' :
            classPriorite = 'yellow';
            miseAJourPriorite(classPriorite);
            break;
        case 'faible' :
            classPriorite = 'green';
            miseAJourPriorite(classPriorite);
            break;
        case 'tres faible' :
            classPriorite = 'blue'
            miseAJourPriorite(classPriorite);
            break;
        default :
            alert('La valeur n est pas reconnue')
            break;
    } 
}

//Modification des Statuts
function initStatut(statut) {
    //mise à jour de Statut
    itemStatut.textContent = statut
}

function modifStatut(reference) {
    var itemStatut = document.getElementById("statut" + reference)
    var statut = prompt("Quel statut voulez vous : A faire, En cours, En Suspend, Fait?")
    statut = statut.toLowerCase()
    
    //Définition de la class couleur
    switch (statut) {
        case 'a faire' :
            statut = 'A faire';
            initStatut(statut);
            break;
        case 'en cours' :
            statut = 'En cours';
            initStatut(statut);
            break;
        case 'en suspend' :
            statut = 'En suspend';
            initStatut(statut);
            break;
        case 'fait' :
            statut = 'Fait';
            initStatut(statut);
            break;
        default :
            alert('La valeur n est pas reconnue')
            break;
    }
}
