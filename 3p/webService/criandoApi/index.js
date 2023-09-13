const express = require("express");
const app = express();


var BD ={
    
        Loja:[
            
    
                {
                    id:1,
                    Nome:"Coca-cola",
                    Precounitario:1 ,
                    
                    Quantidade: 10,
    
                    Categoria: "Refrigerante",
                    
                    Fabricante:{
                                "nome":"Jose",
                                "Endereço":"Rua barbosa 12",
                                "Tel":32323232
                    }
    
    
                    
                    
                },
               {
                    id:2,
                    Nome:"Coxinha de frango",
                    Precounitario:1.59 ,
                    
                    Quantidade: 2,
    
                    Categoria: "Salgado",
                    
                    Fabricante:{
                                "nome":"Lucas",
                                "Endereço":"Rua Triton 212",
                                "Tel":32323232
                    }
    
    
                    
                    
                },
               {
                    id:3,
                    Nome:"Chiclete",
                    Precounitario:0.50 ,
                    
                    Quantidade: 40,
    
                    Categoria: "Goma",
                    
                    Fabricante:{
                                "nome":"Maria",
                                "Endereço":"Rua pedra 231",
                                "Tel":32323232
                    }
    
    
                    
                    
                }
        
    
    
    ]
}
app.listen(45678,() => {
    console.log(`Aplicação rodando na porta 45678`);
});
app.get("/Loja",(req, res) => {
    res.statusCode = 200;
    res.json(BD.Loja);
});

app.get("/Loja/:id",(req, res) => {
    if(isNaN(req.params.id)){
        res.sendStatus(400);
    }else{
        var id = parseInt(req.params.id);

        var produtoLoja = BD.Loja.find( p => p.id==id)
        if(produtoLoja!= undefined){
            res.statusCode=200;
            res.json(produtoLoja);
        }
        else{
            res.statusCode=404;
        }
    }
});

