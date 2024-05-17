export default class Jogo {
    posicoes = ['-', '-', '-', '-', '-', '-', '-', '-', '-'];


    addJogada(i, jogada) {
        this.posicoes[i] = jogada
    }

    printaJogo() {
        let linha1 = this.posicoes.slice(0, 3).join(' | ');
        let linha2 = this.posicoes.slice(3, 6).join(' | ');
        let linha3 = this.posicoes.slice(6, 9).join(' | ');

        console.log(linha1);
        console.log('---------');
        console.log(linha2);
        console.log('---------');
        console.log(linha3);
    }

    melhorJogada() {
        for (let i = 0; i < this.posicoes.length; i++) {


                if (i <= 2) {
                    // 1 linha
                }
                if (i >= 3 && i <= 5) {
                    // 2 linha

                }
                if (i >= 6 && i <= 8) {
                    // 3 linha

                }
                if (i == 0 || i == 3 || i == 6) {
                    // 1 coluna

                }
                if (i == 1 || i == 4 || i == 7) {
                    // 2 coluna

                }
                if (i == 2 || i == 5 || i == 8) {
                    // 3 coluna

                }
                if (i == 0 || i == 4 || i == 8) {
                    // 1 diagonal esquerda direita

                }
                if (i == 2 || i == 4 || i == 6) {
                    // 2 Direitae esquerda

                }
            

        }

    }
}