<?php

$recepient = "your@gmail.com";
$siteName = "Ajax-форма";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$email = trim($_POST["email"])
$message = "Имя: $name \nТелефон: $phone \n Email: $email" ;

$pagetitle = "Заявка с сайта \"$siteName\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>