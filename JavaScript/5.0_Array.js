// Array
// Ordered collection items 

// Crearing an Array
let myArray = ["Apple", "Mango", "Grapes"];
console.log(myArray);
console.log(myArray[2]);
myArray[2] = "Banana";
console.log(myArray[2]);
console.log(myArray);


// Array Methods

// Adding a last item to Array
let fruits = ["Apple", "Mango", "Grapes"];

fruits.push("Banana");
console.log(fruits);

// Adding a first item to Array
let firstAddedItem = fruits.unshift("Cheery");
console.log(fruits);

// Removing last element
let removedElement = fruits.pop();
console.log(fruits);
console.log(removedElement);

// Removing first element
let removedFirstElement = fruits.shift();
console.log(fruits);
console.log(removedFirstElement);

// Array clone
let arr1 = ["Item1", "Item2", "Item3"];
let arr2 = ["Item4", "Item5"];

let cloneArr1 = [].concat(arr1);
console.log(arr1 === cloneArr1);
console.log(cloneArr1);

let cloneArr2 = arr1.slice(0);
console.log(arr1 === cloneArr2);
console.log(cloneArr2);

let cloneArr3 = [...arr1];
console.log(arr1 === cloneArr3);
console.log(cloneArr3);

// Array adding

let addarr1 = ["Item1", "Item2", "Item3"];
let addarr2 = ["Item4", "Item5", "Item6"];

let addArrMethod1 = addarr1.concat(addarr2);
console.log(addArrMethod1);

let addArrMethod2 = addarr1.slice(0).concat(addarr2);
console.log(addArrMethod2);

let addArrMethod3 = [...addarr1, ...addarr2];
console.log(addArrMethod3);

// For loop in array

const forLoopArray = ["Apple", "Mango", "Grapes", "Banana", "Cheery"];

const upperArr = [];

for(let i = 0; i < forLoopArray.length; i++){
	upperArr.push(forLoopArray[i].toUpperCase());
}

console.log(upperArr);

// For of loop in array

const fOfLoopArr = [ 'Item1', 'Item2', 'Item3', 'Item4', 'Item5', 'Item6' ];

for (i of fOfLoopArr){
	console.log(i)
}


// For in loop in array

const fInLoopArr = ["Apple", "Mango", "Grapes", "Banana", "Cheery"];

for (i in fInLoopArr){
	console.log(fInLoopArr[i].toUpperCase())
}

// Array Destructuring

const arrD = [ 'Item1', 'Item2', 'Item3', 'Item4', 'Item5', 'Item6' ];

let [v1, v2, v3, v4, ...v5] = arrD;
console.log(v1);
console.log(v2);
console.log(v3);
console.log(v4);
console.log(v5);
