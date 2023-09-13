const express = require("express");
const app = express();

var DB = {
    games: [
        {
            id: 23,
            title: "The last of us part II",
            year: 2050,
            price: 130
        },
        {
            id: 65,
            title: "The legend of Zelda: breath of the wild",
            year: 2017,
            price: 150
        },
        {
            id: 2,
            title: "Grand Theft Auto IV",
            year: 2008,
            price: 20
        }
    ]
}


app.get("/games/:id",(req, res) => {
    const gameId = parseInt(req.params.id);
    console.log(req.params.id);
    res.statusCode = 200;
    res.json(DB.games.find(game=>game.id===gameId));
});

app.listen(45678,() => {
    console.log(`Aplicação rodando na porta 45678`);
});

