<?php

$mysqli = new mysqli('108.179.252.70', 'casalb89_convite', 'maite123','casalb89_convite');

$action = filter_var($_POST['action'],	FILTER_SANITIZE_STRING);
if($action == 'adicionar'){
	
	die(json_encode('funcionei'));

}
