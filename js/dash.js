var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet"],
        datasets: [{
            label: "Html débutant",
            backgroundColor: 'rgb(255, 0, 54)',
            borderColor: 'rgb(255, 0, 54)',
            data: [0, 10, 10, 15, 20, 10, 15],
        },
        {label: "Html avancée",
            backgroundColor: 'rgb(235, 255, 0)',
            borderColor: 'rgb(235, 255, 0)',
            data: [0, 0, 5, 2, 15, 18, 20],
        },
        {label: "Css débutant",
            backgroundColor: 'rgb(61, 45, 253)',
            borderColor: 'rgb(61, 45, 253)',
            data: [0, 5, 10, 20, 20, 15, 12],
        },
        {label: "Bootstrap",
            backgroundColor: 'rgb(23, 248, 179)',
            borderColor: 'rgb(23, 248, 179)',
            data: [0, 0, 0, 5, 15, 30, 40],
        }]
    },

    // Configuration options go here
    options: {}
});