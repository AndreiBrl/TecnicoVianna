let perceptron;
let points = new Array(100);
let training = true;
let accuracy = 0.98;
let testPoints = [];  

function setup() {
    createCanvas(550, 550);
    perceptron = new Perceptron(3);

    for (let i = 0; i < points.length; i++) {
        points[i] = new Point(random(-1, 1), random(-1, 1));
    }
}

function draw() {
    background(255);
    points.forEach(point => {
        point.show();
    });

    noStroke();

    points.forEach(pt => {
        const inputs = [pt.x, pt.y, pt.bias];
        const target = pt.label;
        const guess = perceptron.guess(inputs);
        if (guess == target) {
            fill(0, 255, 0); 
        } else {
            fill(255, 0, 0); 
        };

        ellipse(pt.getPixelX(), pt.getPixelY(), 15, 15);
    });

    drawLine();

    if (training) {
        trainSinglePoint();
    } else if (testPoints.length === 0) { 
        criaTestaPoints();
    }
}

function drawLine() {
    // stroke(0, 255, 0);
    // let p1 = new Point(-1, f(-1));
    // let p2 = new Point(1, f(1));
    // line(p1.getPixelX(), p1.getPixelY(), p2.getPixelX(), p2.getPixelY());

    // stroke(0, 0, 255);
    // let guessP1 = new Point(-1, perceptron.guessY(-1))
    // let guessP2 = new Point(1, perceptron.guessY(1))
    // line(guessP1.getPixelX(), guessP1.getPixelY(), guessP2.getPixelX(), guessP2.getPixelY());
    stroke(0, 255, 0); // Cor da parábola
    noFill();
    beginShape();
   
    for (let x = -1; x <= 1; x += 0.01) {
        let y = f(x);
        let pixelX = map(x, -1, 1, 0, width);
        let pixelY = map(y, -1, 1, height, 0);
        vertex(pixelX, pixelY); 
    }
    endShape();

};

let trainingIndex = 0;

function trainSinglePoint() {
    const pt = points[trainingIndex];
    const inputs = [pt.x, pt.y, pt.bias];
    perceptron.train(inputs, pt.label);
    trainingIndex++
    if (trainingIndex == points.length) {
        trainingIndex = 0;
    }
    if (perceptron.consecutiveHints >= points.length * accuracy) {
        training = false;
    }
}

function criaTestaPoints() {
    for (let i = 0; i < 100; i++) {
        testPoints[i] = new Point(random(-1, 1), random(-1, 1));
    }

    let correctGuesses = 0;
    testPoints.forEach(pt => {
        const inputs = [pt.x, pt.y, pt.bias];
        const target = pt.label;
        const guess = perceptron.guess(inputs);
        if (guess === target) {
            correctGuesses++;
        }
    });

    let testAccuracy = correctGuesses / testPoints.length;
    console.log(`Precisão: ${(testAccuracy * 100).toFixed(2)}%`);
}
