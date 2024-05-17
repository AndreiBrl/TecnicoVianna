<?php

// var_dump($_GET);

echo "o nome é {$_GET["nome"] } {$_GET["sobrenome"]} <br>idade: {$_GET["idade"]}<br>Estado : {$_GET["selEstado"]} <br>Estado Civil {$_GET["estCivil"]}  <br>";

foreach ($_GET["extras"] as $key => $value) {

    echo "<br>  $value";
    
}