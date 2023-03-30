var divOri = document.querySelector(".phoneGroup");
var container = document.querySelector('.container');

var contador=0;
function adicionaAbaTelefone(){
    var novaDiv = document.createElement('div');
    const estilos = getComputedStyle(divOri);
    for (let i = 0; i < estilos.length; i++) {
        const propriedade = estilos[i];
        novaDiv.style.setProperty(propriedade, estilos.getPropertyValue(propriedade));
      }
novaDiv.innerHTML=divOri.innerHTML;
divOri.insertAdjacentElement('afterend',novaDiv);
console.log(contador+1);
}
