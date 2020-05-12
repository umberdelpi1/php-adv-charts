<?php
  header('Content-Type: application/json');

  require "database.php";



  $name = [];
  $valore = [];
  $team = [];
  $data =[];

  foreach ($graphs['fatturato_by_agent']['data'] as $key => $value) {
    $name[] = $key;
    $valore[] = $value;
  }

  foreach ($graphs['team_efficiency']['data'] as $key => $value) {
    $team[] = $key;
    $data[] = $value;
  }



  $res = [
    'grafico1' => [
        'type' => 'line',
        'data' => [1000,1322,1123,2301,3288,988,502,2300,5332,2300,1233,2322]
    ],
    'grafico2' => [
      'type' => 'pie',
      'data' => $valore,
      'labels' => $name
    ],
    'grafico3' => [
      'type' => 'line',
      'data' => $data,
      'team' => $team
    ]
  ];

echo json_encode ($res);
?>
