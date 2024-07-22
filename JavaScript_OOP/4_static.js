class Car {
    constructor(name) {
      this.name = name;
    }
    static hello() {
      return "Hello!!";
    }
  }
  
  const myCar = new Car("Ford");

  document.getElementById("demo").innerHTML = Car.hello();   // You can call 'hello()' on the Car Class:
  