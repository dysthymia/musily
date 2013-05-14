<?php


//header("Location: http://musily.tmall.com/");
$str= file_get_contents('http://musily.tmall.com/');
$str=str_replace('</head>','<script src="/main.js"></script></head>',$str);
echo $str;

?>