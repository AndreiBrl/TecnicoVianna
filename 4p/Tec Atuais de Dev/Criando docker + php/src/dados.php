<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dados</title>
</head>

<body>
    <table border="1" style="width:90vw;">

        <tr>
            <th>Nome </th>
            <th>Email</th>
            <th>Senha</th>
            <th>Confirmação de Senha</th>
            <th>Cidade/Estado</th>
            <th>Bairro</th>
            <th>Rua</th>
            <th>Nº</th>
            <th>Profissão</th>
            <th>Genêro</th>
            <th>Área de Interesse</th>
            <th>Fale Conosco</th>
            <th>Informativo</th>
        </tr>

        <th>
            <?php echo ($_POST["nome"] != "") ? ucwords(strtolower($_POST["nome"])) : "vazio"; ?>

        </th>
        <th>
            <?php echo ($_POST["email"] != "") ? ucwords(strtolower($_POST["email"])) : "vazio"; ?>

        </th>
        <th>
            <?php echo ($_POST["senha"] != "") ? ucwords(strtolower($_POST["senha"])) : "vazio"; ?>

        </th>
        <th>
            <?php echo ($_POST["confirmacao_senha"] != "") ? ucwords(strtolower($_POST["confirmacao_senha"])) : "vazio"; ?>

        </th>
        <th>
            <?php echo ($_POST["cidade_estado"] != "") ? ucwords(strtolower($_POST["cidade_estado"])) : "vazio"; ?>

        </th>
        <th>
            <?php echo ($_POST["bairro"] != "") ? ucwords(strtolower($_POST["bairro"])) : "vazio"; ?>

        </th>
        <th>
            <?php echo ($_POST["rua"] != "") ? ucwords(strtolower($_POST["rua"])) : "vazio"; ?>

        </th>
        <th>
            <?php echo ($_POST["numero"] != "") ? ucwords(strtolower($_POST["numero"])) : "vazio"; ?>

        </th>
        <th>
            <?php echo ($_POST["profissao"] != "") ? ucwords(strtolower($_POST["profissao"])) : "vazio"; ?>

        </th>

        <th>
            <?php
                echo "{$_POST["genero"] }{$_POST["outro_genero"]}";
            ?>


        </th>

        <th>
            <ul>
                <?php
                if ($_POST["area_interesse"] != null) {


                    foreach ($_POST["area_interesse"] as $key => $value) {
                        echo "<ol>$value</ol>";
                    }
                }else
                {
                    echo "vazio";
                }

                ?>
            </ul>
        </th>
       
        <th>
         
             <?php echo ($_POST["fale_conosco"] != "") ? ucwords(strtolower($_POST["fale_conosco"])) : "vazio"; ?>
             
             
            </th>
            <th>
                <?php echo ($_POST["receber_infos"] != "") ? ucwords(strtolower($_POST["receber_infos"])) : "vazio"; ?>
                
        </th>

        </tr>
    </table>
</body>

</html>