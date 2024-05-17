
export default class Rastreador {

    vertice = null;
    anterior = null;
    custo = 0;
    heuristica = null;

    constructor(vertice, anterior, heuristica) {
        this.vertice = vertice;
        this.anterior = anterior;
        this.heuristica = heuristica;

        if (anterior != null) {
            this.custo = this.anterior.custo + this.anterior.vertice.buscaAresta(this.vertice).peso;
        }
    }
    imprimeCaminho() {
        let atual = this;
        let caminho = [];
        while (atual != null) {
            caminho.unshift(atual.vertice.valor);
            atual = atual.anterior;
        }
        return caminho.join("-->") + "\n";
    }

    retornaCustoTotal() {
        let minutos = Math.floor(this.custo + this.heuristica);
        let segundos = Math.round((this.custo + this.heuristica - minutos) * 60);
        return `${minutos} minutos e ${segundos} segundos`;
    }
}