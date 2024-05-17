import Aresta from "./Aresta.js";

export default class Vertice{
    valor = "";
    heuristica = null;
    adjacentes = [];

    constructor(valor, heuristica){
        this.valor = valor;
        this.heuristica = heuristica;
    }
    
    addAresta(destino, peso){
        this.adjacentes.push(new Aresta(this, destino, peso));
    }
        
    getOrdenados(){
        this.adjacentes.sort((a,b)=>{
            if (a.destino.heuristica < b.destino.heuristica){
                return -1;
            } else if (a.destino.heuristica > b.destino.heuristica){
                return 1;
            }
            return 0;
        });

        let ordenados = [];
        this.adjacentes.forEach(vertice => {
            ordenados.push(vertice.destino);
        });

        return ordenados; 
    }
}