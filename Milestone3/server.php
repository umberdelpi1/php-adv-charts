<?php
  header('Content-Type: application/json');

  require "database.php";

  echo json_encode ($res);

  $name = [];
  $valore = [];

  foreach ($graphs['fatturato_by_agent']['data'] as $key => $value) {
    $name[]= $key;
    $valore[]= $value;

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
    ]
  ];


?>
