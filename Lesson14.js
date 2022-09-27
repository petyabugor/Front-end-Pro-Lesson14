class Car {
    #produceCountry = 'Japan';
    #fuellimit= 100;
    constructor(bodyStyle){
        this.bodyStyle = bodyStyle;
    }

    getProduceCountry = function(){
        return this.#produceCountry
    }
}

class CarBrand extends Car{
    constructor(bodyStyle, brand){
    super(bodyStyle);
    this.brand = brand;
    }  
}


class ModelCarBrand extends CarBrand{
    constructor(bodyStyle, brand, model){
        super(bodyStyle, brand);
        this.model = model;
    }
}

class MarkaCarBrand extends ModelCarBrand{
    static countCar = 0;
    #discount = '5%';
    #adressSalon = 'Odessa, Komarova4';
    constructor(bodyStyle, brand, model, marka, color, price, topSpeed, vinCode){
        super(bodyStyle, brand, model);
        this.marka = marka;
        this.color = color;
        this.price = price;
        this.topSpeed = topSpeed;
        this.vinCode = vinCode;
        MarkaCarBrand.countCar++;
    }
    maxSpeed(){
        return `Максимальная скорость ${this.marka} - ${this.topSpeed}км в час`
    }
    static comparePrice(car1, car2){
        return car2.price - car1.price
    }
}



let ToyotaCamry40 = new MarkaCarBrand('Sedan', 'Toyota', 'Camry', 'Camry50', 'black', 80000, 240, '4Y1SL65848Z411439', 'Jhon')
let ToyotaLandCruiser = new MarkaCarBrand('Crossover', 'Toyota', 'Land Cruiser', 'Land Cruiser 200', 'white', 200000, 220)
let VolkswagenPassat = new MarkaCarBrand('Sedan', 'Volkswagen', 'Volkswagen Passat', 'Volkswagen Passat B7', 'blue', 7000, 230)

//comparePrice
let carsToyota= [ new MarkaCarBrand('Sedan', 'Toyota', 'Camry', 'Camry40', 'black', 60000, 280, '4Y1SL65848Z415869'), 
                  new MarkaCarBrand('Crossover', 'Toyota', 'Land Cruiser', 'Land Cruiser 300', 'white', 70000, 220)]

carsToyota.sort(MarkaCarBrand.comparePrice)
console.log(carsToyota[0].marka)

//countCar
console.log(MarkaCarBrand.countCar)

//#produceCountry
console.log(ToyotaCamry40.getProduceCountry())

console.log(ToyotaCamry40)









































  
