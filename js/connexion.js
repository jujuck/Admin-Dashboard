function login(utilisateur, motDePasse) {
    var myRequestUser = new XMLHttpRequest();
    myRequestUser.open('GET', '../data/users.json');

    myRequestUser.onreadystatechange = function () {
        if(myRequestUser.readyState === 4) {
            users = JSON.parse(myRequestUser.responsetext);   
            }
        }

    myRequestUser.send();
    
    for (i = 0; i < users.length; i++) {
        if(utilisateur === users[i].username && motDePasse === users[i].password) {
            return true;
        } 
    } return false;
}

//Lancement de la fonction
function verificationUser() {
    if (login(userConnexion, passwordConnexion)) {
        window.location.href = 'dashboard.html';
    } else {
        return console.log("Accès refusé")
    }
}