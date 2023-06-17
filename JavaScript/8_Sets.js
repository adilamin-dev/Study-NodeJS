// Sets (it is iterable)
// store data
// sets also have its own methods
// no index-based access
// order is not guaranteed
// unique items only (no duplicates allowed)

const numbers = new Set();
numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(4);
numbers.add(5);
numbers.add('Item');
console.log(numbers);

console.log(numbers.has(2));

for(let item of numbers){
	console.log(item);
}

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 4, 6, 8, 1]

const uniqueElements = new Set(myArray);
let length = 0;

for(let element of uniqueElements){
  length++;
}
console.log(length);

console.log(uniqueElements);
console.log([...uniqueElements]);