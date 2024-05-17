import Grafo from "./Grafo.js";
import Vertice from "./Vertice.js";

let s = new Vertice("s", null);
let a = new Vertice("a", 7);
let b = new Vertice("b", 9);
let c = new Vertice("c", 2);
let d = new Vertice("d", 4);
let e = new Vertice("e", 5);
let t = new Vertice("t", 0);


let novoGravo = new Grafo(s, t);

s.addAresta(a, 3);
s.addAresta(b, 2);
a.addAresta(c, 5);
b.addAresta(d, 7);
b.addAresta(e, 7);
c.addAresta(t, 3);
d.addAresta(t, 4);
e.addAresta(d, 2);