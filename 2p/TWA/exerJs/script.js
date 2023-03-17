let meuSaldo = document.getElementById('meuSaldo')
let meusJogos = document.getElementById('meusJogos');
let listaJogos = [];
let saldo =100;
meuSaldo.textContent=saldo.toString();
class Jogos  {
    nome=" ";
    preco= 0;
}


function compra(){
    var jogos = new Jogos();
    jogos.nome= document.getElementById('caixaTexto').value;
    jogos.preco = document.getElementById('caixaPreco').value;
    if(saldo>=jogos.preco){
        listaJogos.push(jogos);
        saldo-=jogos.preco;
        meuSaldo.textContent=saldo.toString();
// adiociona LI
        novoItem= document.createElement('li'); 
        novoItem.textContent="Jogo: "+jogos.nome +" || Preço: R$"+jogos.preco;
        meusJogos.appendChild(novoItem);
    }
    else{
        console.log("Saldo indisponível");
        meuSaldo.textContent="Saldo indisponível";
    }
    console.log(listaJogos);
    

}
function venda(){
    caixaTexto = document.getElementById('caixaTexto').value;
    caixaPreco = document.getElementById('caixaPreco').value;
    let verificaJogo = false;
    for (let i = 0; i < listaJogos.length; i++) {
       
        if(listaJogos[i].nome==caixaTexto){
            listaJogos.splice(i,1);
            console.log(i);
            verificaJogo=true;
            saldo+=parseInt(caixaPreco)+parseInt(caixaPreco)*0.15;
            meuSaldo.textContent=saldo.toString();
        //remove LI
            meusJogos.removeChild(meusJogos.children[i]);
        }
        else if(verificaJogo==false ){
            novoItem= document.createElement('li');
            novoItem.textContent="jogo não existe"
            console.log("jogo não existe");
            meusJogos.appendChild(novoItem);
            
        }
    }
    console.log(listaJogos);


}




// meusJogos.removeChild(meusJogos.children[this.jogos.indexOf(caixaTexto)+1]);
// var caixaTexto = document.getElementById('caixaTexto').value;
// var caixaPreco = document.getElementById('caixaPreco').value;
// var novoitem = document.createElement('li');
// var btnCompra= document.querySelector('#btnCompra');
// var btnVenda= document.querySelector('#btnVenda');
// var meuSaldo = document.getElementById('meuSaldo');
// var meusJogos = document.getElementById('meusJogos');
// var contador=0;
// meuSaldo.textContent=String("R$ "+minhasCoisas.saldo);
// meusJogos.textContent=minhasCoisas.jogos;
