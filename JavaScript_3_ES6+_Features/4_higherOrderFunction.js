/* Higher Order Function (HOC): function that does at least one of the following:
        1) Takes another function as an argument
        2) Returns a function
*/

//==== examples:

const numbers=[1,2,3,4,5];

//-- find: return first element that satisfies the condition
const found= numbers.find(function(num,i,numbers){
    if(num>3) return num;
});

console.log(found);


//-- reduce: used to reduce array to single value
const sum=numbers.reduce(function(prev_val,curr_val){
    return prev_val+curr_val;
});

console.log(sum);


//-- filter: make filter to array and return sub array from actual array based on my condition
const filtered=numbers.filter((num)=>num%2===0);

console.log(filtered);


//-- map: return new array based on my condition that applied in all element of array
const squaredNum=numbers.map((num)=>num*num);

console.log(squaredNum);