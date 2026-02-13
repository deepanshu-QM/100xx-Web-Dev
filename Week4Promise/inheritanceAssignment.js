
//Assignment #1 - Create a Circle class

class Circle {
    constructor(radius,pi,angle){
        this.radius = radius;
        this.pi = pi;
        this.angle = angle;
    }
    Diameter(){
        const d = 2 * this.radius;
        console.log(`Diameter : ${d}`);
    }
    Circumference(){
        const c = 2* this.pi * this.radius;
        console.log(`Circumference : ${c}`);
    }
    areaCircle(){
        const Area = this.pi * this.radius * this.radius;
        console.log(`Area : ${Area}`);
    }

    areaSemicircle(){
        const Areasemi = 0.5 * this.pi * this.radius * this.radius;
        console.log(`Area of semi Circle : ${Areasemi}`);
    }

    areaQuartercircle(){
        const AreaQuart = (this.angle/360) * 2* this.pi * this.radius;
        console.log(`Area of Quarter Circle :${AreaQuart}`);
    }

}

c1 = new Circle(2.9 ,3.14, 90);

c1.Diameter();
c1.areaSemicircle();
c1.areaQuartercircle();
c1.areaQuartercircle();