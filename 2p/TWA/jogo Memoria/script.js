let quadrado = document.querySelectorAll('div');
let contaJogadas = 0;

quadrado.forEach(element => {
    element.addEventListener('click', function () {

        if (contaJogadas < 3) {
            contaJogadas+=1;
            console.log(contaJogadas);
            
            if (element.getAttribute('alt') == 0 || element.getAttribute('alt') == 3 || element.getAttribute('alt') == 5) {
                element.classList.add('flipLaranja');
            }
            if (element.getAttribute('alt') == 2 || element.getAttribute('alt') == 4 || element.getAttribute('alt') == 7) {
                element.classList.add('flipVerde');
            }
            if (element.getAttribute('alt') == 1 || element.getAttribute('alt') == 6 || element.getAttribute('alt') == 8) {
                element.classList.add('flipAzul');
            }
        }
        
    })



});

while (contaJogadas>=3) {
            console.log(contaJogadas);
    contaJogadas=0;
    setTimeout(() => {
        
        quadrado.classList.remove('flipAzul','flipVerde','flipLaranja');
       
    }, 1000);
}