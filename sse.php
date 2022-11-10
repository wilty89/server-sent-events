
<?php
date_default_timezone_set("America/New_York");
header('Content-Type: text/event-stream');
header('Cache-Control: no-cache');
header('Access-Control-Allow-Origin: *');

$time = date('r');
$curDate = date(DATE_ISO8601);
$messageCounter = 1;
$id= mt_rand(1, 1000);

$data = array(
    'id' => $id,
    'name' => 'wilber',
    'date' =>  $curDate,
    'cant' =>  $messageCounter++,
    'msg'  => "Fecha" . $time,
);
//while (true) {
    //if (connection_aborted()) break;
        echo 'data: Cantidad de Mensajes: ' . $messageCounter++ . " Hora: {$time}\n\n";
       // echo 'data:' . json_encode($data) . PHP_EOL;
        //echo PHP_EOL;
        echo "event: myEvent_2\n";
        echo 'data:' . json_encode($data) . "\n\n";
    ob_flush();
    flush();
    //sleep(3);
//}
?>