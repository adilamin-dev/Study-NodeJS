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

