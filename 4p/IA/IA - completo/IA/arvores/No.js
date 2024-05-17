class No {
    valor = "";
    filhos = [];

    constructor(valor){
        this.valor = valor;
    }

    adicionaFilho(no){
        if(no instanceof No){
            this.filhos.push(no);
        }else{
            throw new Error('Era Esperado um nó como filho');
        }
    }
}

export default No;