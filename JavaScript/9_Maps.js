// Maps 
// map is an itereble

// store data in ordered fashion

// store key value pair (like object)
// duplicate keys are not allowed like objects

// different between maps and objects
	// objects can only have string or symbol as key
	// in maps you can use anything as key like array, number, string



// key value pair
const person = new Map();
person.set('firstName', 'Adil');
person.set('age', 16);
person.set(9, 'Nine');
person.set([1, 2, 3], 'One Two Three');
person.set({item1: 'Mango', item2: 'Banana', item3: 'Cheery'}, 'Mango, Banana, Cheery');
console.log(person);

console.log(person.get(9));

for(let key of person.keys()){
	console.log(key, typeof key, person.get(key));
}


for(let [key, value] of person){
	console.log(key, value);
}


const person2 = new Map([['firstName', 'Adil'], ['age', 26], [9, 'Nine']]);
console.log(person2);


const person3 = {
	id: 1,
	firstName: 'Adil'
}

const person4 = {
	id: 2,
	firstName: 'Bristy'
}
const extraInfo = new Map();

extraInfo.set(person3, {age: 25, gender: "Male"});
extraInfo.set(person4, {age: 21, gender: "Female"});
console.log(extraInfo);
console.log(person3.id)
console.log(extraInfo.get(person3).gender);
console.log(extraInfo.get(person4).gender);
















