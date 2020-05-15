






// inizializzo una funzione per importare dat sul grafico
function printLineChart(){

  var ctx = $("#line");
  var months = getMonth();
  // var dati = printGraphic();


  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: months,
      datasets: [{
        label: '# of Votes',
        data: [1000,1322,1123,2301,3288,988,502,2300,5332,2300,1233,2322],
        backgroundColor: [
            'rgba(0,148,255,.18)'


        ],
        borderColor: [
            'rgba(255, 99, 132, 1)'

        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}






// inizializzo una funzione per stampare i dati del grafico
function printGraphic(){

   // creare una chiamata ajax
   $.ajax({
    url: "getSaleMonth.php",
    method: "GET",
    success: function(data) {
      printLineChart(data);
    },
    error: function(errore){
      console.error(errore);
    }
  })
}


// inizializzo una funzione per i mesi
function getMonth(){
  return moment.monthsShort();
}
// funzione con moment js locale
function init(){
  moment.locale("it");
  printGraphic();
}

$(document).ready(init);
