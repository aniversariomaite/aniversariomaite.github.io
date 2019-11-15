<?php

$mysqli = mysqli_connect('108.179.252.70', 'casalb89_convite', 'maite123','casalb89_convite');

$action = filter_var($_POST['action'],	FILTER_SANITIZE_STRING);
if($action == 'adicionar'){
	$nome = filter_var($_POST['nome'],	FILTER_SANITIZE_STRING);
	$sql = "INSERT INTO `presenca`(`nome`) VALUES ('".$nome."');";
	$result = mysqli_query($mysqli, $sql);
	die(json_encode($result));
}
if($action == 'buscar'){
	$sql = "SELECT `nome` FROM `presenca`;";
	$result = mysqli_query($mysqli, $sql);
	while($row = $result->fetch_row()) {
		$rows[]=$row;
	}
	die(json_encode($rows));
}