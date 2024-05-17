import Aresta from "./Aresta.js";
import Rastreador from "./Rastreador.js";

export default class Grafo {
    inicio = null;
    fim = null;

    constructor(inicio, fim) {
        this.inicio = inicio;
        this.fim = fim;
    }
    buscaMelhorEscolha() {
        let fila = [];
        let ordenados = [];
        let atual;

        fila.push(new Rastreador(this.inicio, null)); 

        while (fila.length > 0) {
            atual = fila.shift();
            if (atual.vertice == this.fim) {
                return atual;
            } else {
                ordenados = atual.vertice.getOrdenados();
                ordenados.forEach(adjacente => {
                    fila.push(new Rastreador(adjacente, atual)); 
                });
            }
        }
    }
    
    buscaAestrela(){
        let abertos = new FilaAbertos();
        let atual;
        let fechado = new Map();
        abertos.adcionar(new Rastreador(this.inicio,null,0))
        atual=abertos.retirarPrimeiro();

        while(atual!=null){
            if(atual.vertice== this.meta){
                return atual

            }
            else{
                fechados.set(atual.vertice.valor,atual);
                atual.vertice.adjacentes.forEach(aresta =>{
                    vertice = aresta.destino;
                    if(!fechado.has(vertice.valor)){
                        let rastreadorAntigo=abertos.buscaRastreador(vertice);
                        let rastreadorNovo = new Rastreador(vertice,atual,vertice.heuristica);
                        if(!rastreadorAntigo){
                            abertos.adicionar
                        }
                    }
                })
            }
        }
    }
}