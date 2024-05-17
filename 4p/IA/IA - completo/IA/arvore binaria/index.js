import ArvoreBinaria from "./ArvoreBinaria.js";
import No from "./No.js";
import ArvoreBuscaBinaria from "./ArvoreBuscaBinaria.js";
import BuscaBLargura from "./BuscaBLargura.js";
import BuscaBProfundidade from "./BuscaBProfundidade.js";

let arvoreBST = new ArvoreBuscaBinaria(100);

arvoreBST.inserir(50);
arvoreBST.inserir(200);
arvoreBST.inserir(30);
arvoreBST.inserir(70);
arvoreBST.inserir(140);
arvoreBST.inserir(400);
arvoreBST.inserir(42);
arvoreBST.inserir(65);
arvoreBST.inserir(80);
arvoreBST.inserir(105);
arvoreBST.inserir(107);
arvoreBST.inserir(350);

BuscaBLargura.buscarL(arvoreBST.raiz);
BuscaBProfundidade.posOrdem(arvoreBST.raiz);
BuscaBProfundidade.inOrdem(arvoreBST.raiz);
BuscaBProfundidade.preOrdem(arvoreBST.raiz);

console.log(arvoreBST.buscar(1420));

// let arvoreB = new ArvoreBinaria("A");
// let noA = arvoreB.raiz;


// let noB = new No("B");
// let noC = new No("C");
// let noD = new No("D");
// let noE = new No("E");
// let noF = new No("F"); 

// noA.adicionaFilhoEsquerda(noB);
// noA.adicionaFilhoDireita(noC);
// noB.adicionaFilhoEsquerda(noF);
// noC.adicionaFilhoEsquerda(noD);
// noC.adicionaFilhoDireita(noE);

// arvoreB.buscarPreOrdem();
// arvoreB.buscarPosOrdem();
// arvoreB.buscarInOrdem();

// arvoreB.buscarL();

//Buscar de arvore do Busca Binaria.
// console.log(arvoreBST.buscar("E"));
