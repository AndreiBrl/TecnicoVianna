const express = require("express");
const app = express();

app.use(express.json())
var BD = {

    Loja: [


        {
            id: 1,
            Nome: "Coca-cola",
            Precounitario: 1,

            Quantidade: 10,

            Categoria: "Refrigerante",

            Fabricante: {
                "nome": "Jose",
                "Endereço": "Rua barbosa 12",
                "Tel": 32323232
            }




        },
        {
            id: 2,
            Nome: "Coxinha de frango",
            Precounitario: 1.59,

            Quantidade: 2,

            Categoria: "Salgado",

            Fabricante: {
                "nome": "Lucas",
                "Endereço": "Rua Triton 212",
                "Tel": 32323232
            }




        },
        {
            id: 3,
            Nome: "Chiclete",
            Precounitario: 0.50,

            Quantidade: 40,

            Categoria: "Goma",

            Fabricante: {
                "nome": "Maria",
                "Endereço": "Rua pedra 231",
                "Tel": 32323232
            }




        }



    ]
}
app.listen(45678, () => {
    console.log(`Aplicação rodando na porta 45678`);
});
app.get("/Loja", (req, res) => {
    res.statusCode = 200;
    res.json(BD.Loja);
});

app.get("/Loja/:id", (req, res) => {
    if (isNaN(req.params.id)) {
        res.sendStatus(400);
    } else {
        var id = parseInt(req.params.id);

        var produtoLoja = BD.Loja.find(p => p.id == id)
        if (produtoLoja != undefined) {
            res.statusCode = 200;
            res.json(produtoLoja);
        }
        else {
            res.statusCode = 404;
        }
    }
});

app.post("/Loja", (req, res) => {
    var { id, Nome, Precounitario, Quantidade, Categoria, Fabricante } = req.body;

    BD.Loja.push({
        id: id,
        Nome: Nome,
        Precounitario: Precounitario,
        Quantidade: Quantidade,
        Categoria: Categoria,
        Fabricante, Fabricante
    })
    res.sendStatus(200);
});
app.put('/Loja/:id', (req, res) => {


    if(isNaN(req.params.id)){
        res.sendStatus(404);
    }
    var id =parseInt(req.params.id)

    var produtoLoja = BD.Loja.find(p => p.id == id)

    if(produtoLoja==undefined){
        res.sendStatus(404)
    }
    let{Nome, Precounitario, Quantidade, Categoria, Fabricante}=req.body

    
    if(Nome!=undefined){
        produtoLoja.Nome=Nome;
    }
    if(Categoria!=undefined){
        produtoLoja.Categoria=Categoria;
    }
    if(Precounitario!=undefined){
        produtoLoja.Precounitario=Precounitario;
    }
    if(Quantidade!=undefined){
        produtoLoja.Quantidade=Quantidade;
    }
    if(Fabricante!=undefined){
        produtoLoja.Fabricante=Fabricante;
    }
    res.sendStatus(200)

});