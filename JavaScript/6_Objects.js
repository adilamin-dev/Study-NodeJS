// Objects
// objects reference type  
// arrays are good but not sufficient 
// for real world data 
// objects store key value pairs 
// objects don't have index

// how to create objects 
const mailKey = "email";
const person = {
	name: 'Adil',
	age: 25,
}
console.log(person);


// how to access data from objects
console.log(person.name); 
console.log(person.age);

// how to add key value pair to objects
person.hobbie = "Programming";
person[mailKey] = "adilamin.dev@gmail.com";

console.log(person);

// Iterate Object

// For in loop
for (let key in person){
	console.log(`key is ${key} and Value is ${person[key]}`);
}
console.log(person);

// Object.keys
console.log(Object.keys(person));
for (let keyValue of Object.keys(person)){
	console.log(`${keyValue} : ${person[keyValue]}`);
}
console.log(person);


// Computed properties

const key1 = "objectKey1";
const key2 = "objectKey2";

const objValue1 = "myObjValue1";
const objValue2 = "myObjValue2";


const obj = {
	[key1] : objValue1
}


obj[key2] = objValue2;
console.log(obj); 

// Spread operator in objct

const myObj1 = {
	key1 : "value1",
	key2 : "value2"
}

const myObj2 = {
	key1 : "valueUnique",
	key3 : "value3",
	key4 : "value4"
}

const myNewObj = {...myObj1, ...myObj2}

console.log(myNewObj);


// Object Destructuring

const teacher = {
  name : "Rayhan",
  age : 27,
  school : "Nazirul Islam",
  subject : "Math"
}

const {name, age, school, subject} = teacher;

console.log(name, age, school, subject);

// Object in Array 

const userData = [
  {userID: 1, firstName: "Adil", gender: "male"},
  {userID: 2, firstName: "Bristy", gender: "female"},
];

for (let user of userData){
	console.log(user.firstName);
}

// Nested destructuring

const [{firstName: user1FirstName, gender: user1Gender}, {firstName: user2FirstName, gender: user2Gender}] = userData;
console.log(`User 1 Data: Name: ${user1FirstName.toUpperCase()} and Gender: ${user1Gender.toUpperCase()}.
User 2 Data: Name: ${user2FirstName.toUpperCase()} and Gender: ${user2Gender.toUpperCase()}.`);


