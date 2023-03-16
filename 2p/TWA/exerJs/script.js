var minhasCoisas={
    celular:"Celular",
    cadeira: "Cadeira Gamer",
    jogos:[],
    saldo:100,
    compra: function(){


        var caixaTexto = document.getElementById('caixaTexto').value;
        var caixaPreco = document.getElementById('caixaPreco').value;
        if(this.saldo>=parseInt(caixaPreco)){
            this.jogos.push(caixaTexto);
            console.log(minhasCoisas.jogos);
            this.jogos.push(caixaPreco);
            console.log(minhasCoisas.jogos);

            this.saldo-= parseInt(caixaPreco);
            meuSaldo.textContent=String(minhasCoisas.saldo);
            
                var novoitem = document.createElement('li');
                novoitem.textContent=minhasCoisas.jogos[0];
                meusJogos.appendChild(novoitem);
                contador+=2;
                
            
            
        }
        else{
            meuSaldo.textContent="Saldo Indisponível";

        }
        
    },
    venda: function(){
        var caixaTexto = document.getElementById('caixaTexto').value;
        var caixaPreco = document.getElementById('caixaPreco').value;
        this.jogos.splice(this.jogos.indexOf(caixaTexto),2);
        console.log(minhasCoisas.jogos);
        this.saldo+= parseInt(caixaPreco);
        meuSaldo.textContent=String(minhasCoisas.saldo);
        meusJogos.textContent=minhasCoisas.jogos;
        contador-=2;
    }
    
    
}
var btnCompra= document.querySelector('#btnCompra');
var btnVenda= document.querySelector('#btnVenda');
var meuSaldo = document.getElementById('meuSaldo');
var meusJogos = document.getElementById('meusJogos');
var contador=0;
meuSaldo.textContent=String(minhasCoisas.saldo);
meusJogos.textContent=minhasCoisas.jogos;
// minhasCoisas.compra("GOD");
// minhasCoisas.compra("Fifa");
// minhasCoisas.compra("Rust ");
// minhasCoisas.venda("Fifa");
// console.log(minhasCoisas.jogos);