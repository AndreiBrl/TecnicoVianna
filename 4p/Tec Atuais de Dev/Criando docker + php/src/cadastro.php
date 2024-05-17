<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro</title>
</head>

<body>
    <style>
        .container {
            margin-left: 40vw;
        }

        h1 {
            margin: 0;
            padding: 0;
        }
    </style>
    <div class="container">
        <form action="dados.php" method="POST">
            <h1>Cadastro</h1><br>
            Nome: <input type="text" name="nome" placeholder="Nome"><br><br>
            Email: <input type="text" name="email" placeholder="Email"><br><br>
            Senha: <input type="password" name="senha" placeholder="Senha" oninput="contaSenha(this)">
            <h1 class="senhaMenor" style="display:none; color:red; font-size:0.7vw;">É recomendando que senha tenha no
                mínimo 6 dígitos</h1><br><br>

            Confirmação de Senha: <input type="password" name="confirmacao_senha" oninput="confirmaSenha(this)"
                placeholder="Confirmação de Senha">
            <h1 class="senhaCorresponde" style="display:none; color:red; font-size:0.7vw;">Senha não corresponde</h1>
            <br><br>

            <script>
                let primeiraSenha;
                let senhaMenor = document.querySelector(".senhaMenor");
                let senhaCorresponde = document.querySelector(".senhaCorresponde");
                function contaSenha(element) {
                    setTimeout(() => {
                        primeiraSenha = element.value

                        if (element.value.length < 6) {

                            senhaMenor.style.display = "inline"
                        }

                        else {
                            senhaMenor.style.display = "none"

                        }
                    }, 1000);
                }
                function confirmaSenha(element) {
                    setTimeout(() => {


                        if (element.value == primeiraSenha) {
                            senhaCorresponde.style.display = "none"

                        } else {
                            senhaCorresponde.style.display = "inline"

                        }
                    }, 1000);

                }
            </script>



            <h1>Endereço</h1><br>
            Cidade/Estado: <input type="text" name="cidade_estado" placeholder="Ex: Juiz de Fora/MG"><br><br>
            Bairro: <input type="text" name="bairro" placeholder="Bairro"><br><br>
            Rua: <input type="text" name="rua" placeholder="Rua">
            Nº: <input type="text" name="numero" placeholder="Nº"><br><br>
            Profissão: <input type="text" name="profissao" placeholder="Profissão"><br><br>
            <h1>Área de Interesse</h1> <br>

            <input type="checkbox" name="area_interesse[]" value="Engenheiro de Software"> Engenheiro de Software
            <input type="checkbox" name="area_interesse[]" value="Analista de Segurança de Informação"> Analista de
            Segurança de Informação<br>
            <input type="checkbox" name="area_interesse[]" value="Analista de Sistemas"> Analista de Sistemas
            <input type="checkbox" name="area_interesse[]" value="Administrador do banco de dados (DBA)"> Administrador
            do banco de dados (DBA)<br>
            <input type="checkbox" name="area_interesse[]" value="Gestor de tecnologias da informação"> Gestor de
            tecnologias da informação
            <input type="checkbox" name="area_interesse[]" value="Arquiteto de redes"> Arquiteto de redes<br>
            <input type="checkbox" name="area_interesse[]" value="Desenvolvedor"> Desenvolvedor

            <br><br>
            <h1>Genêro</h1> <br>
            <input type="radio" name="genero" value="M" onclick="pegaGenero(this)"> Masculino<br>
            <input type="radio" name="genero" value="F" onclick="pegaGenero(this)"> Feminino<br>
            <input type="radio" name="genero" value=" " onclick="pegaGenero(this)"> Outro<br><br>
            <input type="hidden" name="outro_genero" class="AddSex" placeholder="Nos conte aqui"><br><br>

            <script>
                let AddSex = document.querySelector(".AddSex");
                function pegaGenero(radio) {
                    console.log(radio.value);
                    if (radio.value != "M" && radio.value != "F") {

                        AddSex.setAttribute("type", "text");
                    }
                    else {

                        AddSex.setAttribute("type", "hidden");
                    }


                }
            </script>
            <br><br>
            <h1>Fale Conosco</h1> <br>

            <textarea rows="4" cols="50" name="fale_conosco">
Fale com nossa equipe por aqui...
</textarea>
            <br> <br>
            <h1>Deseja receber Infos Todo dia?</h1> <br>

            <input type="radio" name="receber_infos" value="Sim"> SIM<br>
            <input type="radio" name="receber_infos" value="Não"> NÃO<br><br>

            <input style="margin-left:8vw;" type="submit" value="Cadastrar"><br><br>

        </form>
    </div>
</body>

</html>