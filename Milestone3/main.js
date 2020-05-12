
function fatturato(){

  $.ajax({
    url: "server.php",
    method: "GET",
    success: function (data){
      console.log("data", data['grafico1']['data']);


    var ctx = $('#line');
    console.log();
    var myChart = new Chart(ctx, {
      type: data.grafico1['type'],
        data: {
        labels: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
        datasets: [{
            label: '# of Votes',
            data: data.grafico1['data'],
            backgroundColor: [
                'rgba(255, 99, 132, 0.3)',
                'rgba(54, 162, 235, 0.3)',
                'rgba(255, 206, 86, 0.3)',
                'rgba(75, 192, 192, 0.3)',
                'rgba(153, 102, 255, 0.3)',
                'rgba(255, 159, 64, 0.3)',
                'rgba(7,141,249, 0.3)',
                'rgba(20,255,0, 0.3)',
                'rgba(154,9,255, 0.3)',
                'rgb(43,252,2, 0.3)',
                'rgb(0,255,247, 0.3)',
                'rgba(19,29,125, 0.3)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(7,141,249,4)',
                'rgba(20,255,0,4)',
                'rgba(154,9,255,4)',
                'rgb(43,252,2,4)',
                'rgb(0,255,247,4)',
                'rgba(19,29,125,4)'
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
  },error: function(error){
    console.error(error);
  }
})
}

function fatturatoByAgent(){

  $.ajax({
    url: "server.php",
    method: "GET",
    success: function (data){
      console.log("data", data['grafico2']['data']);

    var ctx = $('#pie');
    console.log();
    var myChart = new Chart(ctx, {
      type: data.grafico2['type'],
        data: {
        labels: data.grafico2['labels'],
        datasets: [{
            label: '# of Votes',
            data: data.grafico2['data'],
            backgroundColor: [
                'rgba(255, 99, 132, 0.3)',
                'rgba(54, 162, 235, 0.3)',
                'rgba(255, 206, 86, 0.3)',
                'rgba(75, 192, 192, 0.3)',
                'rgba(153, 102, 255, 0.3)',
                'rgba(255, 159, 64, 0.3)',
                'rgba(7,141,249, 0.3)',
                'rgba(20,255,0, 0.3)',
                'rgba(154,9,255, 0.3)',
                'rgb(43,252,2, 0.3)',
                'rgb(0,255,247, 0.3)',
                'rgba(19,29,125, 0.3)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(7,141,249,4)',
                'rgba(20,255,0,4)',
                'rgba(154,9,255,4)',
                'rgb(43,252,2,4)',
                'rgb(0,255,247,4)',
                'rgba(19,29,125,4)'
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
  },error: function(error){
    console.error(error);
  }
})
}

function teamEfficienty(){

  $.ajax({
    url: "server.php",
    method: "GET",
    success: function (data){
      console.log("data", data['grafico3']['data']);

    var ctx = $('#lineDue');
    console.log();
    var myChart = new Chart(ctx, {
      type: data.grafico3['type'],
        data: {
        labels: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
        datasets: [{
            label: data.grafico3['team'][0],
            data: data.grafico3['data'][0],
            backgroundColor: [
                'rgba(255, 99, 132, 0.3)',
                'rgba(54, 162, 235, 0.3)',
                'rgba(255, 206, 86, 0.3)',
                'rgba(75, 192, 192, 0.3)',
                'rgba(153, 102, 255, 0.3)',
                'rgba(255, 159, 64, 0.3)',
                'rgba(7,141,249, 0.3)',
                'rgba(20,255,0, 0.3)',
                'rgba(154,9,255, 0.3)',
                
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(7,141,249,4)',
                'rgba(20,255,0,4)',
                'rgba(154,9,255,4)',

            ],
            borderWidth: 1
          },
          {
              label: data.grafico3['team'][1],
              data: data.grafico3['data'][1],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.3)',
                  'rgba(54, 162, 235, 0.3)',
                  'rgba(255, 206, 86, 0.3)',
                  'rgba(7,141,249, 0.3)',
                  'rgba(20,255,0, 0.3)',
                  'rgba(154,9,255, 0.3)',
                  'rgb(43,252,2, 0.3)',
                  'rgb(0,255,247, 0.3)',
                  'rgba(19,29,125, 0.3)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(7,141,249,4)',
                  'rgba(20,255,0,4)',
                  'rgba(154,9,255,4)',
                  'rgb(43,252,2,4)',
                  'rgb(0,255,247,4)',
                  'rgba(19,29,125,4)'
              ],
              borderWidth: 1
            },
            {
                label: data.grafico3['team'][2],
                data: data.grafico3['data'][2],
                backgroundColor: [

                    'rgba(75, 192, 192, 0.3)',
                    'rgba(153, 102, 255, 0.3)',
                    'rgba(255, 159, 64, 0.3)',
                    'rgba(7,141,249, 0.3)',
                    'rgba(20,255,0, 0.3)',
                    'rgba(154,9,255, 0.3)',
                    'rgb(43,252,2, 0.3)',
                    'rgb(0,255,247, 0.3)',
                    'rgba(19,29,125, 0.3)'
                ],
                borderColor: [

                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(7,141,249,4)',
                    'rgba(20,255,0,4)',
                    'rgba(154,9,255,4)',
                    'rgb(43,252,2,4)',
                    'rgb(0,255,247,4)',
                    'rgba(19,29,125,4)'
                ],
                borderWidth: 1
              },
            ]
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
  },error: function(error){
    console.error(error);
  }
})
}




function init() {
  fatturato();
  fatturatoByAgent();
  teamEfficienty();
}

$(document).ready(init);
