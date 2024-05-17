import Coluna from "./Coluna.js";
import Diagonais from "./Diagonais.js";
import  Jogo  from "./Jogo.js";

let jogo = new Jogo();



// Jogador 1 = Circulo  -- Jogador 2 = X

// Primeira Rodada
jogo.addJogada(0,"X")
jogo.addJogada(4,"O")

// Segunda Rodada
jogo.addJogada(6,"X")


jogo.printaJogo();
