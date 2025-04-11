
class Car {
    // constructor
    constructor(name, year) {
      this._name = name;
      this._year = year;
    }

    // getter and setter
    getName(){
        this._name;
    }
    setName(new_name){
        this._name=new_name;
    }

    getYear(){
        this._year;
    }
    setYear(new_year){
        this._year=new_year;
    }

    // extention method
    age() {
        const date = new Date();
        return date.getFullYear() - this._year;
    }
}

const myCar1 = new Car("Ford", 2014);
myCar1.age();