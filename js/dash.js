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
        labels: ['Html débutant','Html avancée','Css débutant','Bootstrap',],
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

var menu = document.getElementById("menu-responsive");


document.getElementById("img-menu").addEventListener("mouseover", function (e) {
    menu.style.display = "inline";
    setTimeout(function() {
    menu.style.display = "none";
    }, 3000);
})