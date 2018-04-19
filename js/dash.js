var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet"],
        datasets: [{
            label: "Html débutant",
            backgroundColor: 'rgba(255, 0, 54, 0.5)',
            borderColor: 'rgba(255, 0, 54, 0.5)',
            data: [0, 10, 10, 15, 20, 10, 15],
        },
        {label: "Html avancée",
            backgroundColor: 'rgba(235, 255, 0, 0.5)',
            borderColor: 'rgba(235, 255, 0, 0.5)',
            data: [0, 0, 5, 2, 15, 18, 20],
        },
        {label: "Css débutant",
            backgroundColor: 'rgba(61, 45, 253, 0.5)',
            borderColor: 'rgba(61, 45, 253, 0.5)',
            data: [0, 5, 10, 20, 20, 15, 12],
        },
        {label: "Bootstrap",
            backgroundColor: 'rgba(23, 248, 179, 0.5)',
            borderColor: 'rgba(23, 248, 179, 0.5)',
            data: [0, 0, 0, 5, 15, 30, 40],
        }]
    },

    // Configuration options go here
    options: {}
});

var ctxPie = document.getElementById("myPie");
var myPieChart = new Chart(ctxPie,{
    type: 'pie',
    data : {
        labels: ['Html débutant','Html avancée','Css débutant','Bootstrap'],
        datasets: [{
            data: [40, 25, 20, 15],
            backgroundColor: [
                'rgba(255, 0, 54, 0.5)',
                'rgba(235, 255, 0, 0.5)',
                'rgba(61, 45, 253, 0.5)',
                'rgba(23, 248, 179, 0.5)' 
            ]
        }]

    // These labels appear in the legend and in the tooltips when hovering different arcs
    
    }
});

var ctxRadar = document.getElementById("myRadar");
var myRadarChart = new Chart(ctxRadar, {
    type: 'radar',
    data: {
        labels: ['Matin', 'Après-midi', 'Soir'],
        backgroundColor: [
                'rgba(255, 0, 54, 0.5)',
                'rgba(235, 255, 0, 0.5)',
                'rgba(61, 45, 253, 0.5)',
                'rgba(23, 248, 179, 0.5)' 
            ],
        datasets : [{
            label: "Html débutant",
            data: [65, 20 , 15],
            backgroundColor: 'rgba(255, 0, 54, 0.5)'
        },
        {
            label: "Html avancé",
            data: [35, 80 , 15],
            backgroundColor: 'rgba(235, 255, 0, 0.5)'
        },
        {
            label: "Css",
            data: [10, 65 , 0],
            backgroundColor: 'rgba(61, 45, 253, 0.5)'
        },
        {
            label: "Bootstrap",
            data: [25, 15 , 30],
            backgroundColor: 'rgba(23, 248, 179, 0.5)'
        }]    
    }
});

var ctxPolar = document.getElementById("myPolar");
new Chart(ctxPolar, {
    type: 'polarArea',
    data: {
        labels : ["Html débutant", "Html avancé", "Css", "Bootstrap"],
        datasets : [{
            label: 'Lundi',
            data: [10, 5 , 0, 0],
            backgroundColor: 'rgba(255, 0, 54, 0.5)'
        },
        {
            label: 'Mardi' ,
            data: [0, 15 , 0, 10],
            backgroundColor: 'rgba(235, 255, 0, 0.5)'
        },
        {
            label: 'Mercredi' ,
            data: [10, 0, 5, 5],
            backgroundColor: 'rgba(61, 45, 253, 0.5)'
        },
        {
            label:'Jeudi' ,
            data: [0, 0 , 2, 3],
            backgroundColor: 'rgba(23, 248, 179, 0.5)'
        },
        {
            label: 'Vendredi' ,
            data: [10, 0, 5, 5],
            backgroundColor: 'rgba(61, 45, 253, 0.5)'
        },
        {
            label: 'Samedi' ,
            data: [10, 0, 5, 5],
            backgroundColor: 'rgba(61, 45, 253, 0.5)'
        },
        {
            label: 'Dimanche' ,
            data: [10, 0, 5, 5],
            backgroundColor: 'rgba(61, 45, 253, 0.5)'
        }
        ]
    }
});

var menu = document.getElementById("menu-responsive");
document.getElementById("img-menu").addEventListener("mouseover", function (e) {
    menu.style.display = "inline";
    setTimeout(function() {
    menu.style.display = "none";
    }, 4000);
});


//Mise en place des outils en JS
function resetOutil() {
    var calcul = document.getElementById("calcul");
     if (calcul.classList.contains('hidden') === false) {
        calcul.classList.add('hidden')
    }
    var ToDo = document.getElementById("ToDo");
     if (ToDo.classList.contains('hidden') === false) {
        ToDo.classList.add('hidden')
    }
    var meteo = document.getElementById("meteo");
     if (meteo.classList.contains('hidden') === false) {
        meteo.classList.add('hidden')
    }
    var film = document.getElementById("film");
     if (film.classList.contains('hidden') === false) {
        film.classList.add('hidden')
    }
    var rates = document.getElementById("rates");
     if (rates.classList.contains('hidden') === false) {
        rates.classList.add('hidden')
    }
}

var outilItem;
// Drag'n'Drop
var move = function (event) {
   var posX = event.pageX;
   var posY = event.pageY;
   outilItem.style.position = "absolute";
   outilItem.style.top = posY - (outilItem.offsetHeight / 2) + "px";
   outilItem.style.left = posX - (outilItem.offsetWidth / 2) + "px";
} 

function affichageOutil(outil) {
    resetOutil()
    outilItem = document.getElementById(outil);
    outilItem.classList.remove('hidden');
    
    //attente d'event
    outilItem.addEventListener('mousedown', function() {
        outilItem.addEventListener('mousemove', move);
    });

    outilItem.addEventListener('mouseup', function () {
       outilItem.removeEventListener('mousemove', move);
    });
    
}





