//Définition des utilisateurs
var users = [
    {
        "username": "Richard",
        "firstName": "Julien",
        "pseudo": "jujuck",
        "password" : "julienMDP",
        "birthday" : "11/02/1983",
        "adress" : "La hinchere",
        "zipCode" : "85600",
        "city": "Treize Septiers",
        "country": "France",
        "email": "julien.y.richard@gmail.com",
        "study" : "STAPS, Communication, Web-developpement",
        "hobbies" : "Sport Nature, guitare et lecture",
        "dashboardValid": true
    },
    {
        "username": "User1",
        "firstName": "David",
        "pseudo": "dada ",
        "password" : "davidMDP",
        "birthday" : "25/03/1988",
        "adress" : "Avenue Charles de Gaulle",
        "zipCode" : "85000",
        "city": "Roche sur Yon",
        "country": "France",
        "email": "user14.david@gmail.com",
        "study" : "Web-developpement",
        "hobbies" : "WOW",
        "dashboardValid": true
    },
    {
        "username": "User2",
        "firstName": "John",
        "pseudo": "jojo ",
        "password" : "johnMDP",
        "birthday" : "15/10/1992",
        "adress" : "Allée des tilleuls",
        "zipCode" : "85000",
        "city": "Roche sur Yon",
        "country": "France",
        "email": "user2.john@gmail.com",
        "study": "Patisserie, web-Developpement",
        "hobbies" : "Musique classique",
        "dashboardValid": true
    },
    {
        "username": "Invite",
        "firstName": "",
        "pseudo": "invite ",
        "password" : "MDP",
        "birthday" : "",
        "adress" : "",
        "zipCode" : "",
        "city": "",
        "country": "",
        "email": "",
        "study" : "",
        "hobbies" : "",
        "dashboardValid": false
    }
]

//PArtie 3 vérification de la connexion
//Vérification du formulaire de connexion
var validID = false;
var userConnexion = document.getElementById("usernameConnexion");
var passwordConnexion = document.getElementById("passConnexion");

//Chargement du fichier JSon et vérification utilisateur
function login(utilisateur, motDePasse) {
    /*var myRequestUser = new XMLHttpRequest();
    myRequestUser.open('GET', '../data/users.json', true);
    myRequestUser.responseType = 'json'
    myRequestUser.send();
    var users;
    
    myRequestUser.onreadystatechange = function () {
        if(myRequestUser.readyState === 4) {
            console.log(myRequestUser)
            users = JSON.parse(myRequestUser.responsetext);   
            }
        }
        */
    
    for (i = 0; i < users.length; i++) {
        if(utilisateur === users[i].username && motDePasse === users[i].password) {
            validID = true;
            return true;
        } 
    } return false;
}

//Lancement de la fonction
function verificationUser() {
    if (login(userConnexion.value, passConnexion.value)) {
        userConnexion.value = "";
        document.getElementById("connexion").classList.add('hidden');
        window.location.href = 'html/dashboard.html';
    } else {
        userConnexion.value = "";
        return alert("Accès refusé");
    }
}


//Partie 4 : vérification inscription
//validate password 
document.getElementById("passwordInscription").addEventListener("input", function (e) {
	var password = e.target.value;
	var passwordLength = "weak";
	var messageColor = "black";
	var passwordRegexLetter = /[A-Z]/;
	var passwordRegexNumber = /[1-9]/;
	var strength = 0;
	var Letter = "Capital letter: checked";
	var Nombre = "Number: checked";

	//Calcul de la force du mot de passe
	if (passwordRegexLetter.test(e.target.value) === true) {
		strength += 2;
	} else {
		var Letter = "must have at least one capital Letter";
	};

	if (passwordRegexNumber.test(e.target.value) === true) {
		strength += 2;
	} else {
		var Nombre = "must have at least one number";
	};

	strength += password.length;

	//Affichage des différents cas
	if (strength > 12) {
		passwordLength = "Very Strong";
		messageColor = "green";
	} else if (strength >= 10)  {
		passwordLength = "Strong";
		messageColor = "yellow";
	} else if (strength >= 8) {
		passwordLength = "Medium";
		messageColor = " orange";
	} else if (strength >= 6) {
		passwordLength = "Poor";
		messageColor = "red";
	}

	var passwordHelpElement = document.getElementById("passwordHelp");
	passwordHelpElement.textContent = "Strength: " + passwordLength + ", " + Letter + ", " + Nombre;
	passwordHelpElement.style.color = messageColor;
});
