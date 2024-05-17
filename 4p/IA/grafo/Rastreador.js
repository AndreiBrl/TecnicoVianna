export default class Rastreador {
    vertice = null;
    anterior = null;
    aresta = null; 

    constructor(vertice, anterior) { 
        this.vertice = vertice;
        this.anterior = anterior;
       
    }
    imprimeCaminho() {
        let atual = this;
        let saida = atual.vertice.valor;
        let somaTotal =0;
        
        while (atual.anterior != null) {
            atual = atual.anterior;
            saida = atual.vertice.valor + " --> " + saida;
            somaTotal=somaTotal+atual.vertice.adjacentes[0].peso
            
        }
        console.log("o Custo total é "+ somaTotal);
    
        console.log("\nCaminho encontrado:");
        console.log(saida);
   
    }

    retornaCustoTotal(){
        
    }
    
    
}