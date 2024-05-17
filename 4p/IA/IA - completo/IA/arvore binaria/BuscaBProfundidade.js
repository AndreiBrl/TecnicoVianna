class BuscaBProfundidade{
    static preOrdem(no){
        if(!no){
            return;
        }

        console.log(no.valor);
        BuscaBProfundidade.preOrdem(no.filhoEsquerda);
        BuscaBProfundidade.preOrdem(no.filhoDireita);
    }

    static posOrdem(no){
        if(!no){
            return;
        }
        BuscaBProfundidade.posOrdem(no.filhoEsquerda);
        BuscaBProfundidade.posOrdem(no.filhoDireita);
        console.log(no.valor);
    }
    static inOrdem(no){
        if(!no){
            return;
        }
        BuscaBProfundidade.inOrdem(no.filhoEsquerda);
        console.log(no.valor);
        BuscaBProfundidade.inOrdem(no.filhoDireita);
    }

}

export default BuscaBProfundidade;