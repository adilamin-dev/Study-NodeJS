// Important array methods

// forEach

const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

myArr.forEach((num, ind) => {
	console.log(`Index is ${ind} and Number is ${num}.`);
});

// map

const squaredArray = myArr.map((num) => {
	return num * num;
})

console.log(squaredArray); // map will return an array.

// Another example of map

const employes = [
  {name: "Adil Amin", age: 25, selary: 20000}, 
  {name: "Azizul Haque", age: 26, selary: 20000}, 
  {name: "MD Rayhan", age: 27, selary: 20000}
];

const nameOfEmployes = employes.map((employes) => {
	return employes.name;
})

console.log(nameOfEmployes);



// filter method. filter will return truethy values.

const filteredNumbers = myArr.filter((num) => {
	return num % 2 === 0;
})

console.log(filteredNumbers);


// reduce

const sumOfMyArr = myArr.reduce((accumulator, currentValue) => {
	return accumulator + currentValue;
})

console.log(sumOfMyArr);


// Another example of reduce

const totalSelaryOfEmployes = employes.reduce((total, employe) => {
	return total + employe.selary;
}, 0)

console.log(`Total selary is ${totalSelaryOfEmployes} Taka.`);


// sort method

const friendsName = ["adil", "azizul", "rayhan", "zafor", "ridoy", "abir"];  // Need more practice.

console.log(friendsName.sort());


const numberArr = [834, 4, 64, 6, 883, 32, 5];

// acending sort

console.log(numberArr.sort((a, b) => {
	return a-b;
}));

// decending sort

console.log(numberArr.sort((a, b) => {
	return b-a;
}));




// find method

const fourCharName = friendsName.find((fName) => fName.length === 4);

console.log(fourCharName);

// Another example of find method

const users = [
  {userID: 1, userName: "Adil"},
  {userID: 2, userName: "Azizul"},
  {userID: 3, userName: "Rayhan"},
  {userID: 4, userName: "Zafor"},
  {userID: 5, userName: "Abir"},
  {userID: 6, userName: "Ridoy"},
]

console.log(users.find((user) => user.userID === 3));


// every method. every method reciev a callback function. callback return a boolean value.
// And every method also return boolean value. If condition are true for each item then every method retuen true otherwise false.

const numArr = [2, 4, 6, 8, 10];

console.log(numArr.every((num) => num % 2 === 0));

// Another example of every method

const userCart = [
  {userID: 1, productName: "mobile", price: 12000},
  {userID: 2, productName: "laptop", price: 30000},
  {userID: 3, productName: "tv", price: 15000}
]

console.log(userCart.every((cartItem) => cartItem.price < 40000)); // If all product price under 40k then return true.


// some method. If one item true then some method return true. If all items false then some method return false.

const numArr2 = [1, 3, 5, 7, 8, 9];

console.log(numArr2.some((num) => num % 2 === 0));


// fill method

const myArrFill = new Array(10).fill(1);
console.log(myArrFill);

// Another example of fill

const myArrFill2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(myArrFill2.fill(0, 1, 6));



// splice method
// start, delet, insert

// delet
const mySpliceArr = ["item1", "item2", "item3", "item4"];
const deletedItem = mySpliceArr.splice(2, 1);
console.log(mySpliceArr, `Deleted Item: ${deletedItem}`);

// insert 
const mySpliceArr2 = ["item1", "item2", "item3", "item4"];
mySpliceArr2.splice(1, 0, "Inserted me!");
console.log(mySpliceArr2);

// delet and insert
const mySpliceArr3 = ["item1", "item2", "item3", "item4"];
const deletedItems3 = mySpliceArr3.splice(1, 2, "Inserted Item1", "Inserted Item2");
console.log(mySpliceArr3, `Deleted Items: ${deletedItems3}`);



// iterables
// we can use for of loop in iterables
// string, array are iterables
const myString = "Adil Amin";
for(let char of myString){
	console.log(char);
}

const myArray = ["item1", "item2", "item3", "item4"];
for(let item of myArray){
	console.log(item)
}


// array like object
// has a length property
// can access with index
// example: string

const myName = "Hello World";
console.log(myName.length);
console.log(myName[6]);










