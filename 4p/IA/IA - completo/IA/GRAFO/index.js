import Grafo from "./Grafo.js";
import Vertice from "./Vertice.js";


// let s = new Vertice("s",null);
// let t = new Vertice("t",0);
// let a = new Vertice("a",8.1);
// let b = new Vertice("b",5.2);
// let c = new Vertice("c",4.8);
// let d = new Vertice("d",8.3);
// let e = new Vertice("e",6.4);
// let f = new Vertice("f",4.7);
// let g = new Vertice("g",2.5);

// let grafo = new Grafo(s,t);

// s.adicionarAresta(a,3.1);
// s.adicionarAresta(d,4.9);
// a.adicionarAresta(b,3.1);
// d.adicionarAresta(e,2.2);
// e.adicionarAresta(f,2.2);
// f.adicionarAresta(b,5.1);
// f.adicionarAresta(g,2.2);
// b.adicionarAresta(f,5.1);
// b.adicionarAresta(c,3.5);
// c.adicionarAresta(t,4.8);
// g.adicionarAresta(t,2.5);



let A = new Vertice("A",null);
let B = new Vertice("B",51);
let C = new Vertice("C",50.1);
let D = new Vertice("D",18.2);
let E = new Vertice("E",18.2);
let F = new Vertice("F",14.9);
let G = new Vertice("G",7.6);
let H = new Vertice("H",0);
let I = new Vertice("I",66.6);
let J = new Vertice("J",64.6);
let L = new Vertice("L",50.2);
let M = new Vertice("M",34);
let N = new Vertice("N",17.1);
let O = new Vertice("O",12.5);


let grafo = new Grafo(A,H);

A.adicionarAresta(B,7.8);
B.adicionarAresta(C,11.2);
C.adicionarAresta(D,16.2);
D.adicionarAresta(E,16.1);
E.adicionarAresta(F,16.8);
F.adicionarAresta(G,12.9);
G.adicionarAresta(H,7.6);
B.adicionarAresta(I,7.5);
I.adicionarAresta(J,5.9);
J.adicionarAresta(L,15.4);
L.adicionarAresta(M,14.1);
M.adicionarAresta(N,16.9);
N.adicionarAresta(O,12.5);
O.adicionarAresta(G,5);


let caminho = grafo.buscaAestrela();
console.log(caminho.imprimeCaminho(), caminho.retornaCustoTotal());

