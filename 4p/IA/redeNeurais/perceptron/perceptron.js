class Perceptron {

    weights = [];
    lr = 0.1;
    consecutiveHints = 0;


    constructor(numberWeights) {
        this.weights = new Array(numberWeights);
        this.previousWeights = [...this.weights];
        this.epsilon = 0.01;

        for (let i = 0; i < this.weights.length; i++) {
            this.weights[i] = random(-1, 1);
        }
    }
    train(inputs, target) {
        const guess = this.guess(inputs);
        const error = target - guess;
        let weightsChanged = false;

        for (let i = 0; i < this.weights.length; i++) {
            let weightBefore = this.weights[i];
            this.weights[i] += error * inputs[i] * this.lr;
            if (Math.abs(this.weights[i] - weightBefore) > this.epsilon) {
                weightsChanged = true;
            }
        }

        if (!weightsChanged) {
            this.consecutiveHints++;
        } else {
            this.consecutiveHints = 0;
        }

        if (this.consecutiveHints >= 50) { 
            training = false;
        }
    }
    guess(inputs) {
        let sum = 0;

        for (let i = 0; i < this.weights.length; i++) {
            sum += inputs[i] * this.weights[i];
        }

        let output = this.sign(sum);
        return output;

    }
    guessY(x) {
        let w0 = this.weights[0];
        let w1 = this.weights[1];
        let w2 = this.weights[2];
        return w0 * x * x + w1 * x + w2;


    }

    sign(num) {
        return num >= 0 ? 1 : -1;
    }
}