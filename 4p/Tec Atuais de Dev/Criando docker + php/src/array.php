<?php

$data = array(
    array(244, "jao", "5.5", "22%"),
    array(552, "leo", "6.6", "33%"),
    array(252, "flavia", "10.0", "66%"),
    array(312, "mati", "2.3", "11%"),
    array(431, "fandi", "3.4", "22%"),
    array(556, "mauro", "10.5", "78%"),
    array(611, "tess", "5.8", "12%"),
);


?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <table border="1">
        <tr>
            <th>Matrícula</th>
            <th>Nome</th>
            <th>Nota</th>
            <th>Frequência</th>
        </tr>
        <?php
        foreach ($data as $key => $value) {
            echo "<tr>";

            foreach ($value as $key2 => $resFinal) {



                echo "<td $key2 => $resFinal </td>";


            }
            echo "</tr>";
        }
        ?>

    </table>

</body>

</html>