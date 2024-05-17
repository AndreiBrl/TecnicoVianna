import Grafo from "./Grafo.js";
import Vertice from "./Vertice.js";


let s = new Vertice("s", null);
let a = new Vertice("a", 8.1);
let b = new Vertice("b", 5.2);
let c = new Vertice("c", 4.8);
let d = new Vertice("d", 8.3);
let e = new Vertice("e", 6.4);
let f = new Vertice("f", 4.7);
let g = new Vertice("g", 2.5);
let t = new Vertice("t", 0);

let grafo = new Grafo(s,t);

s.addAresta(d, 4.9);
s.addAresta(a, 3.1);
a.addAresta(b, 3.1);
d.addAresta(e, 2.2);
e.addAresta(f, 2.2);
f.addAresta(b, 5.1);
f.addAresta(f, 5.1);
b.addAresta(c, 3.5);
c.addAresta(t, 4.8);
g.addAresta(t, 2.5);

let rastreia = grafo.buscaMelhorEscolha();
rastreia.imprimeCaminho();


let caminho = grafo.buscaAestrela();
console.log(caminho);