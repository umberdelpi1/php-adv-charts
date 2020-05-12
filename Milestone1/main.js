
function printLineChart(){

  $.ajax({
    url: "server.php",
    method: "GET",
    success: function (data){
      console.log("data", data);


    var ctx = $('#line');
    console.log();
    var myChart = new Chart(ctx, {
      type: 'line',
        data: {
        labels: data.labels,
        datasets: [{
            label: '# of Votes',
            data: data.data,
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



function init() {
  printLineChart();
}

$(document).ready(init);







// $(document).ready(function(){
//
//   function printLineChart(){
//     var ctx = $('#line');
//
//     $.ajax({
//       url: "server.php",
//       method: "GET",
//       success: function(data) {
//       console.log(data);
//       },
//       error: function(error){
//         console.log(error);
//       }
//     });
//
//     var myChart = new Chart(ctx, {
//       type: 'bar',
//       data: {
//           labels: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
//           datasets: [{
//               label: '# of Votes',
//               data: [1000,1322,1123,2301,3288,988,502,2300,5332,2300,1233,2322],
//               backgroundColor: [
//                   'rgba(255, 99, 132, 0.2)',
//                   'rgba(54, 162, 235, 0.2)',
//                   'rgba(255, 206, 86, 0.2)',
//                   'rgba(75, 192, 192, 0.2)',
//                   'rgba(153, 102, 255, 0.2)',
//                   'rgba(255, 159, 64, 0.2)'
//               ],
//               borderColor: [
//                   'rgba(255, 99, 132, 1)',
//                   'rgba(54, 162, 235, 1)',
//                   'rgba(255, 206, 86, 1)',
//                   'rgba(75, 192, 192, 1)',
//                   'rgba(153, 102, 255, 1)',
//                   'rgba(255, 159, 64, 1)'
//               ],
//               borderWidth: 1
//           }]
//       },
//       options: {
//           scales: {
//               yAxes: [{
//                   ticks: {
//                       beginAtZero: true
//                   }
//               }]
//           }
//       }
//     });
//   }
// });
