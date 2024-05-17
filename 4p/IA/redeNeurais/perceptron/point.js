function f(x) {
    return (x * x * 0.3) + (x * 0.2) + 0.1;
}

class Point {

    x = 0;
    y = 0;
    label = 0;
    bias = 1;

    constructor(x, y) {
        this.x = x
        this.y = y
        this.label = this.getLabel();
        this.bias = 1;

    }


    getLabel() {
        const lineY = f(this.x);
        return (this.y > lineY) ? 1 : -1;
    }

    getPixelX() {
        const px = map(this.x, -1, 1, 0, width);
        return px;

    }
    getPixelY() {
        const py = map(this.y, -1, 1, height, 0);
        return py;

    }
    show() {
        stroke(0); // cor do contorno
        this.label === 1 ? fill(0) : fill(255);

        const px = this.getPixelX();
        const py = this.getPixelY();

        ellipse(px, py, 22, 22);
    }
    debug() {
        console.log('label' + this.label + "X: " + this.x + "Y:" + this.y);
    }

}