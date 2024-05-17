class No{
    valor = "";
    filhoDireita = null;
    filhoEsquerda = null;

    constructor(valor){
        this.valor = valor;
    }

    adicionaFilhoDireita(no){
        if( no instanceof No){
            this.filhoDireita = no;
        }else{
            throw new Error("filho deve ser nó");
        }
    }

    adicionaFilhoEsquerda(no){
        if( no instanceof No){
            this.filhoEsquerda = no;
        }else{
            throw new Error("filho deve ser nó");
        }
    }
}

export default No;