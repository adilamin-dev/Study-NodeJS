// Functions

function isEven(num){
  return num % 2 === 0;
}

console.log(isEven(9));

function firstCharacter(strInp){
  return strInp[0];
}

console.log(firstCharacter("Adil"));


// Function
// Input: Array, target (number)
// Output: Index of target if target present in array

const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const targetFinder = function(Arr, target){
  for(i in Arr){
    console.log(Arr[i])
    if(Arr[i] === target){
      return `target Found ${Arr[i]} and index number is: ${i}`
      break
    }
  }
}


console.log(targetFinder(myArr, 6));

// Lexical scope

const myVar = "Value1";

function myApp (){
	function myFunc(){
		//const myVar = "Value2";
		const myFunc2 = () => {
			console.log(myVar);
		}
		myFunc2();
	}
	console.log(myVar);
	myFunc();
}

myApp();


// Parameter destructuring

const myObj = {
	name: 'Adil Amin',
	age: 18,
}

function printDetails({name, age}){
	console.log(name, age);
}

printDetails(myObj);

// Callback functions

function myFunc2(myName){
	console.log("Inside myFunc2", myName);
}

function myFunc(callback){
  callback("Adil");
}

myFunc(myFunc2);

// Function returning function

function retfunction(){
	function retfunction2(){
		return "Hello from retfunction2";
	}
	return retfunction2;
}


//const retf = retfunction();
//console.log(retf());

console.log(retfunction()());


