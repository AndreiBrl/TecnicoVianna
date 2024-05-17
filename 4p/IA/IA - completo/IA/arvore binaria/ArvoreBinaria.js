import No from "./No.js";
import BuscaBProfundidade from "./BuscaBProfundidade.js";
import BuscaBLargura from "./BuscaBLargura.js";

class ArvoreBinaria{
    raiz = null;
    constructor(valor){
        this.raiz = new No(valor);
    }

    buscarPreOrdem(){
        console.log(("Busca em pré-ordem profundidade."));
        BuscaBProfundidade.preOrdem(this.raiz);
    }

    buscarInOrdem(){
        console.log("Busca em inOrdem profundidade");
        BuscaBProfundidade.inOrdem(this.raiz);
    }

    buscarPosOrdem(){
        console.log("Busca Pro-Ordem profundidade");
        BuscaBProfundidade.posOrdem(this.raiz);
    }

    buscarL(){
        console.log("Busca em Largura");
        BuscaBLargura.buscarL(this.raiz);
    }


    
}

export default ArvoreBinaria;