

class Produto {
    #id;
    #nome;
    #preco;
    #quantidade;

    constructor(id, nome, preco, quantidade) {

        this.#id = id;
        this.#nome = nome;
        this.#preco = preco;
        this.#quantidade = quantidade;
    }

    getid() {
        return this.#id;
    }
    setid(id) {
        this.#id = id;

    }


    getid() {
        return this.#nome;
    }
    setid(nome) {
        this.#nome = nome;

    }

    getid() {
        return this.#preco;
    }
    setid(preco) {
        this.#preco = preco;

    }

    getid() {
        return this.#quantidade;
    }
    setid(quantidade) {
        this.#quantidade = quantidade;

    }

}


let btn = document.querySelector(".btn");

btn.addEventListener('click',function() {
    let inputID = document.querySelector(".inputID").value;
    let inputQtd = document.querySelector(".inputQtd").value;
    console.log(inputID);
    console.log(inputQtd);
    

    
})


