// Написать класс Машина который имеет поля марка, прозивоство, цена, макс скорость мин скорост. 
// Методы разгона (+ 10) и снижение (-20), и метод ораброжение всей информации данного класа. 
// Создать Новый класс Toyota который будет наследоваться от класса Машина со всеми его полями

class Car {
    constructor(name, country, price, max_speed, min_speed) {
      this.name = name;
      this.country = country;
      this.price = price;
      this.max_speed = max_speed;
      this.min_speed = min_speed;
    }
    accelerate(max_speed) {
      this.max_speed += 10;
    }
    brake(min_speed) {
      this.min_speed -= 20;
    }
    InfoAboutCar() {
        return `${this.name} has been producted in ${this.country}. The price of ${this.name} in Spain is ${this.price}. 
        This car can develop the top speed of ${this.max_speed}. The lowest speed is ${this.min_speed}.`
    }
}    

console.log(Car)



// Создать Новый класс Toyota который будет наследоваться от класса Машина со всеми его полями

   class Toyota extends Car {
    constructor(name, country, price, max_speed, min_speed){
    super(name, country, price, max_speed, min_speed);
   }
};




const corolla = new Toyota("Corolla", "Japan", 20000, 214, 28);

corolla.InfoAboutCar();
corolla.accelerate();
corolla.brake();


console.log(corolla.InfoAboutCar());


