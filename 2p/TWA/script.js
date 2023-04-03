var h2 = document.querySelector(".resposta h2");
function tabuada(operador){
    
    var conta=" ";
    for (let i = 1; i <= 9; i++) {
        conta+=operador+" x "+i+" = "+operador*i+" "+ "\n";
    }
    console.log(conta);

    h2.textContent=conta;
    h2.style.width="21%";
    
}