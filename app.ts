// x = '2';

let y: number;

y = 3;

let z = 3;

interface Person {
	firstName: String;
	lastName: String;
	age: Number;
	[key: string]: any;
	// aDDING LAST LINE means that every object implementing this interface will NEED to have the first three properties, and then it can add any more if it wants
}

const person: Person = {
	firstName: '3',
	lastName: 'no',
	age: 3,
	refer: 'no', //DOESN'T WORK UNLESS WE USE LAST LLINE OF INTERFACE
};

// Each parameter needs to have the type that you want as the arguments, and after the parameters you mention the type that you want returned
// You can use the type 'void' as return type to not return anything. typically used on eventlisteners or sideeffects
function names(first: string, second: string): string {
	return first + second;
}

names('sajjad ', 'brohi');

// Note that 'Person' is an interface with the types of the properties declared
const arr: Person[] = [];

arr.push(person);
arr.push(3); //Error

type MyList = [number?, string?, boolean?];

const myList: MyList = []; //If we don't put question mark when declaring the type above we will have to initialise the array here

myList.push(3);
myList.push(3);
myList.push(3);

class Rush<T> {
	constructor(name: T) {}
}

let x = new Rush(arr); //Implicitly declaring the type to be used by using an argument of an array of 'person' objects in the constructor
