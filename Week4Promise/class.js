
class MathOperation{
    constructor(length,width,side){
        this.length = length;
        this.width = width;
        this.side = side;
    }

    area(){
        const area = this.length * this.width;
        return area;
    }

    Square(){
        const sq = this.side * 2;
        return sq;
    }

    perimeter(){
        const p = 2*(this.length + this.width);
        return p;
    }

}
const rect1 = new MathOperation(2.4, 6.8 , 4);
const area = rect1.area();
const Square = rect1.Square();
const perimeter = rect1.perimeter();
console.log(`Area : ${area} \nSquare : ${Square}  \nperimeter : ${perimeter} `)