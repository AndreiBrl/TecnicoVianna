class No {

    valor = "";
    filhos = [];
    filhoDireita = null;
    filhoEsquerda = null;

    constructor(valor) {

        this.valor = valor;



    }
    addFilho(no) {
        if (no instanceof No) {


            this.filhos.push(no);
        } else {
            throw new Error('Error espareado um nó como filho')
        }
    }
    addEsquerda(no) {
        if (no instanceof No) {
            this.filhoEsquerda = no;
            this.filhos.push(no);
        }

    }
    addDireita(no) {
        if (no instanceof No) {
            this.filhoDireita = no;

            this.filhos.push(no);
        }
    }
    busca(no, num) {
        if (no instanceof No) {

            console.log(no.valor + " -- " + num);
            if (no.valor == num) {

                return console.log("Encontrado");

            }
            else if (no.filhoEsquerda != null && no.filhoEsquerda.valor >= num) {
                console.log(" percorrendo esquerda");
                return this.busca(no.filhoEsquerda, num)
            }

            else {
                console.log(" percorrendo Direita");
                if (no.filhoDireita != null) {

                    return this.busca(no.filhoDireita, num)
                }
            }
            console.log("Não encontrado");
        }

    }
    
    insert(no, num) {
        const novoNo = new No(num);
        if (no instanceof No || no ===null) {
            
            
            if (no ===null || no.valor === null) {
                no =novoNo;
                console.log(no.valor);
                
                return console.log(no. valor+ " foi adicionado");
            }
            else if (no.filhoEsquerda === null || no.filhoEsquerda.valor >= num) {
                if(no.filhoEsquerda === null){
                    no.addEsquerda(num)
                return console.log(num +" adicionado a esquerda");
                }
                return this.insert(no.filhoEsquerda, num)
            }

            else if(no.filhoDireita === null || no.filhoDireita.valor <= num){
                    no.addDireita(num)
                return console.log(num +" adicionado a Direita");
                }

                    return this.insert(no.filhoDireita, num)
                
            
            
        }
        
        console.log("Não encontrado");
    }

   
    
    
}

export default No;