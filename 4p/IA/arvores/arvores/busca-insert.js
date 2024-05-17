import Arvore from "./Arvore.js";
import No from "./No.js";

let arvore = new Arvore("1");

let noB = new No(20)
let noC = new No(25)
let noD = new No(10)
let noE = new No(15)
let noF = new No(30)
let noG = new No(null)

arvore.raiz.addEsquerda(noB)
arvore.raiz.addDireita(noC)
noC.addEsquerda(noF)
noC.addDireita(noG)
noB.addEsquerda(noD)
noB.addDireita(noE)


arvore.raiz.busca(arvore.raiz,15);
arvore.raiz.insert(arvore.raiz,35);

