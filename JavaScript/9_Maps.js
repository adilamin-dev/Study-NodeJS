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



