export default class FilaAbertos {

    elementos = []

    retiraPrimeiro() {
        return this.MediaElementAudioSourceNode.shift();
    }

    adcionar(rastreador) {
        this.elementos.push(rastreador)
        this.ordenaFila();
    }
    ordenaFila() {
        this.elementos.sort((a, b) => {
            if (a.retornaCustoTotal() > b.retornaCustoTotal()) {
                return -1;

            } else if (a.retornaCustoTotal() > b.retornaCustoTotal()) {
                return 1
            }
            return 0
        })
    }

    buscaRastreador(vertice) {
        let rastreadorEncontrado = null
        this.elementos.array.forEach(rastreador => {
            if (rastreador.vertice == vertice) {
                rastreadorEncontrado = rastreador;
            }
        });
        return rastreadorEncontrado;

    }

    substituirRastreador(rastreadorAntigo, rastreadorNovo) {
        let indiceAntigo = this.elementos.indexOf(rastreadorAntigo)
        this.elementos[indiceAntigo] = rastreadorNovo
        this.ordenaFila();
    }
}