// define object
const stud1={
    f_name:"yousef",
    l_name:"sharbi",
    age:21
};

const stud2={}; // or, const stud2=new Object(); ... same
stud2.f_name="ahmad";
stud2.l_name="sharbi";
stud2.age="20";

const stud3={
    f_name:"yousef",
    l_name:"sharbi",
    age:21,
    fullName: function() {
        return this.f_name+" "+this.l_name;
    }
};

//----------------------------------------------------------------
// copy object
const stud2_copy=stud2; // copy object stud2

//----------------------------------------------------------------
// get/add/delete/update

const person={name:"rami", age:25};

// get
let name=person.name; // person['name']

// add
person.id=1;

stud3.description=function(){
    return "name: "+this.fullName+", "+"age: "+this.age;
};

// delete
delete person.age; //or, delete person["age"];

// update
person.name="anas";

//----------------------------------------------------------------
// nested object

const person1={
    name:"yousef",
    age:21,
    cars:{
        car1:"BMW",
        car2:"Hundai",
        car3:"Mazda"
    }
};

person1.cars.car1;//or, person1.cars["car1"]; ... or, person1["cars"]["car1"];

//-----------------------------------------------------------------
// print

document.getElementById("demo").innerHTML= person;
document.getElementById("demo").innerHTML= "name: "+person.name+", "+"age: "+person.age;

//-----------------------------------------------------------------
// constructor

function Car(name, color, num_of_pass){
    this.name=name;
    this.color=color;
    this.num_of_pass;
    this.type="sport";
}

const bmw=new Car("M4","Blue",4); // create instance from Car

const bmw_copy={
    year:"2024"
};
Object.assign(bmw_copy, bmw); // target,source ... Copies properties from a source object(bmw) to a target object(bmw_copy)

const bmw1 = Object.create(bmw); // Creates an object from an existing object

const entries = Object.entries(bmw); // Returns an array of the key/value pairs of an object, // Output: [['name', 'M4'], ['color', 'Blue'], ['num_of_pass', 4], ['type', 'sport']]

const entriesList = [['make', 'BMW'], ['model', 'X5']];
const newCar = Object.fromEntries(entriesList);  // Creates an object from a list of keys/values, Output: { make: 'BMW', model: 'X5' }    

const keys = Object.keys(bmw); // Returns an array of the keys of an object, Output: ['name', 'color', 'num_of_pass', 'type']

const values = Object.values(bmw); // Returns an array of the property values of an object, Output: ['M4', 'Blue', 4, 'sport']

//protection
Object.preventExtensions(bmw); // Prevents adding object properties
Object.isExtensible(bmw); // Returns true if properties can be added to an object

Object.seal(bmw); // Prevents adding and deleting object properties
Object.isSealed(object); // Returns true if object is sealed

Object.freeze(object); // Prevents any changes to an object
Object.isFrozen(object); // Returns true if object is frozen


// prototype
Car.prototype.num_of_wheels=4;

Car.prototype.fullDescription=function(){
    return this.name+", "+this.color+", "+this.type+", "+this.num_of_wheels;
};




