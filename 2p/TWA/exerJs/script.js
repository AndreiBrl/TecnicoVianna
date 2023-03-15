var minhasCoisas={
    celular:"Celular",
    cadeira: "Cadeira Gamer",
    jogos:[],
    compra: function(){


        var caixaTexto = document.getElementById('caixaTexto').value;
        this.jogos.push(caixaTexto);
        console.log(minhasCoisas.jogos);

    },
    venda: function(){
        var caixaTexto = document.getElementById('caixaTexto').value;
        this.jogos.splice(this.jogos.indexOf(caixaTexto),1);
        console.log(minhasCoisas.jogos);
    }


}
var btnCompra= document.querySelector('#btnCompra');
var btnVenda= document.querySelector('#btnVenda');
// minhasCoisas.compra("GOD");
// minhasCoisas.compra("Fifa");
// minhasCoisas.compra("Rust ");
// minhasCoisas.venda("Fifa");
// console.log(minhasCoisas.jogos);