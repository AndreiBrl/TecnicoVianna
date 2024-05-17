<?php

require_once("UsuarioSessao.php");

$usul1 = new UsuarioSesso();

$usul1->salvar();

$usul1->nome = "aaaa";


$usul1->login = "aaaa";

var_dump($usul1);