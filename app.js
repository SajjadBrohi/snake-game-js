// x = '2';
let y;
y = 3;
let z = 3;
const person = {
    firstName: '3',
    lastName: 'no',
    age: 3,
    refer: 'no',
};
// Each parameter needs to have the type that you want as the arguments, and after the parameters you mention the type that you want returned
// You can use the type 'void' as return type to not return anything. typically used on eventlisteners or sideeffects
function names(first, second) {
    return first + second;
}
names('sajjad ', 'brohi');
// Note that 'Person' is an interface with the types of the properties declared
const arr = [];
arr.push(person);
arr.push(3); //Error
const myList = []; //If we don't put question mark when declaring the type above we will have to initialise the array here
myList.push(3);
myList.push(3);
myList.push(3);
class Rush {
    constructor(name) { }
}
let x = new Rush(arr); //Implicitly declaring the type to be used by using an argument of an array of 'person' objects in the constructor
