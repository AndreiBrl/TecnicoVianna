var tabela = document.querySelectorAll('td');
var contaJogada = 1;
var btnRestart = document.querySelector('a');
var condicao = true;
var h1Vencedor= document.createElement('h1');






tabela.forEach(element => {
    element.addEventListener("click", function (event) {
        
        
        if (condicao) {

            if (element.textContent != "X" && element.textContent != "O") {
                if (contaJogada % 2 != 0) {
                    element.style.color="red";
                    element.textContent = "X";
                    contaJogada++;
                }
                else {
                    element.style.color="green";
                    element.textContent = "O";
                    contaJogada++;
                }
            }

            console.log(contaJogada);
            if(contaJogada==10){
                h1Vencedor.style.color="black";
                h1Vencedor.textContent="deu velha";
                
            }
            venceu();

        }
        });

    });

btnRestart.addEventListener("click", function () {
    tabela.forEach(element => {
        contaJogada = 1;
        element.textContent = "";
        condicao=true;
        h1Vencedor.textContent="";


    });
});


function venceu() {




    if (tabela[0].textContent === tabela[1].textContent && tabela[1].textContent === tabela[2].textContent && tabela[0].textContent.length == 1) {
condicao=false;
        if (contaJogada % 2 === 0) {
            console.log("jogador 1 venceu");

        }
        else {
            console.log("jogador 2 venceu");
        }

    }

    if (tabela[3].textContent === tabela[4].textContent && tabela[4].textContent === tabela[5].textContent && tabela[3].textContent.length == 1) {
        condicao=false;
        if (contaJogada % 2 === 0) {
            console.log("jogador 1 venceu");
        }
        else {
            console.log("jogador 2 venceu");
        }
    }
    if (tabela[6].textContent === tabela[7].textContent && tabela[7].textContent === tabela[8].textContent && tabela[6].textContent.length == 1) {
        condicao=false;
        if (contaJogada % 2 === 0) {
            console.log("jogador 11 venceu");
        }
        else {
            console.log("jogador 2 venceu");
        }
    }

    if (tabela[0].textContent === tabela[3].textContent && tabela[3].textContent === tabela[6].textContent && tabela[0].textContent.length == 1) {
        condicao=false;
        if (contaJogada % 2 === 0) {
            console.log("jogador 1 venceu");
        }
        else {
            console.log("jogador 2 venceu");
        }
    }

    if (tabela[1].textContent === tabela[4].textContent && tabela[4].textContent === tabela[7].textContent && tabela[1].textContent.length == 1) {
        condicao=false;
        if (contaJogada % 2 === 0) {
            console.log("jogador 1 venceu");
        }
        else {
            console.log("jogador 2 venceu");
        }
    }
    if (tabela[2].textContent === tabela[5].textContent && tabela[5].textContent === tabela[8].textContent && tabela[2].textContent.length == 1) {
        condicao=false;
        if (contaJogada % 2 === 0) {
            console.log("jogador 1 venceu");
        }
        else {
            console.log("jogador 2 venceu");
        }
    }
    if (tabela[0].textContent === tabela[4].textContent && tabela[4].textContent === tabela[8].textContent && tabela[0].textContent.length == 1) {
        condicao=false;
        if (contaJogada % 2 === 0) {
            console.log("jogador 1 venceu");
        }
        else {
            console.log("jogador 2 venceu");
        }
    }
    if (tabela[2].textContent === tabela[4].textContent && tabela[4].textContent === tabela[6].textContent && tabela[2].textContent.length == 1) {
        condicao=false;
        if (contaJogada % 2 === 0) {
            console.log("jogador 1 venceu");
        }
        else {
            console.log("jogador 2 venceu");
        }
    }
    if(condicao==false){
        if (contaJogada % 2 === 0) {
            h1Vencedor.textContent="jogador 1 venceu";
            h1Vencedor.style.color=('red');
        }
        else {
            h1Vencedor.textContent="jogador 2 venceu";
            h1Vencedor.style.color=('green');
        }
        
    }
    btnRestart.insertAdjacentElement("afterend",h1Vencedor);


}


