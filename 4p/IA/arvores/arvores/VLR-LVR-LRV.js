import Arvore from "./Arvore.js";
import No from "./No.js";

let arvore = new Arvore("A");

let noB = new No("B")
let noC = new No("C")
let noD = new No("D")
let noE = new No("E")
let noF = new No("F")
let noG = new No("G")

arvore.raiz.addEsquerda(noB)
arvore.raiz.addDireita(noC)
noC.addEsquerda(noF)
noC.addDireita(noG)
noB.addEsquerda(noD)
noB.addDireita(noE)





function VLR(no) {
    if (no === null) {
        return;
    }   
    console.log(no.valor);
    VLR(no.filhoEsquerda);
    VLR(no.filhoDireita);
}
VLR(arvore.raiz);
console.log("--------");



function LVR(no) {
    if (no === null) {
        return;
    }
    LVR(no.filhoEsquerda);
    console.log(no.valor);
    LVR(no.filhoDireita);
}

LVR(arvore.raiz);
console.log("--------");

function LRV(no) {
    if (no === null) {
        return;
    }   
  LRV(no.filhoEsquerda)
  LRV(no.filhoDireita)
    console.log(no.valor);
}
LRV(arvore.raiz);
