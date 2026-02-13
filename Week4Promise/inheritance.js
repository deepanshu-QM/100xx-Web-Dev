
class Vehicle{
    constructor(name,model){
        this.name = name;
        this.model = model;
    }
    detail(){
        console.log(`Car Name : ${this.name}\n Model :${this.model}`);
    }
}
class Car extends Vehicle{
    topspeed(){
        this.speed = '230mph';
        console.log(`Car Name : ${this.name}\n Model :${this.model}\n Top-Speed : ${this.speed}`);
    }
}

let sedan = new Car("BMW", 'i7-model');
sedan.topspeed();