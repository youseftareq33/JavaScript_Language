// destructuring: allow us to destruct value from object or array 

//==== array example

const colors=["Red","Green","Blue"];


//-- default way to unpack value:
const first_color_1=colors[0];
const second_color_1=colors[1];
const third_color_1=colors[2];


//-- destructuring way:
const [first_color_2,second_color_2]=colors;

console.log(first_color_2);
console.log(second_color_2);

// we can skip item

const [,,third_color_2]=colors;
console.log(third_color_2);


//===================================================================================
//==== object example

console.log("========================================");
const Person={
    name:"yousef",
    age:22,
    address:{
        city:"Ramallah",
        street:"st1"
    }
};


//-- default way to unpack value:
const name_1=Person.name;
const age_1=Person.age;
const city_1=Person.address.city;
const street_1=Person.address.street;

//-- destructuring way:
const {age: age_2, name: name_2, address:{city: city_2, street: street_2}}=Person; // or   const {name_2,age_2,address: {city_2, street_2}}=Person;

console.log(name_2);
console.log(age_2);
console.log(city_2);
console.log(street_2);