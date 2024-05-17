<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
    echo "{$_GET["usuario"] } "
    ?>
    <form action="processa.php" method="get">
        Nome: <input  value="<?php echo "{$_GET["usuario"]}"  ?>"type="text" name="nome" id="nome" placeholder="<?php echo "{$_GET["usuario"]}"  ?>"><br>
        Sobrenome : <input type="text" name="sobrenome" id="sobre"><br>
        Idade: <input type="text" name="idade" id="idade">
        <br>
        <input type="radio" name="estCivil" value="Casado">Casado
        <input type="radio" name="estCivil" value="Solteiro"> Solteiro
        <br>
        <select name="selEstado">
            <option value="MG">MG</option>
            <option value="RJ">RJ</option>
            <option value="SP">SP</option>
            <option value="PA">PA</option>
        </select>
        <br><br>
        <input type="checkbox" name="extras[]" value="Garagem">Garagem<br>
        <input type="checkbox" name="extras[]" value="Piscina">Piscina<br>
        <input type="checkbox" name="extras[]" value="Jardim">Jardim<br>


        <input type="submit" value="Enviar">
    </form>
</body>

</html>