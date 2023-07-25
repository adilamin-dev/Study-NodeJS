
// this method
// function inside object

function personeInfo(){
    console.log(`Persone name is ${this.myName} and age is ${this.age}.`)
}

const persone1 = {
  myName: "Adil Amin",
  age: 25,
  about: personeInfo
}

persone1.about();


function personeInfo2(city, hobby){
    console.log(`Persone name is ${this.myName} and age is ${this.age} ${city} ${hobby}.`)
}

const persone = {
  myName: "Adil Amin",
  age: 25,
}


// call
personeInfo2.call(persone, "Dhaka", "Programming");

// apply

personeInfo2.apply(persone, ["Dhaka", "Programming"]);

// bind
// bind always return a function.
const myBindFunc = personeInfo2.bind(persone, "Kishoreganj", "Reading Book");

myBindFunc();


// call example 2

const persone2 = {
    firstName: "Adil",
    age: 25,
    about: function (hobby, favFood) {
        console.log(`My Name is ${this.firstName} and my age is ${this.age} ${hobby} ${favFood}.`)
    }
}

const persone3 = {
    firstName: "Bristy",
    age: 21
}

console.log(persone2.about.call(persone3, "Reading Book", "Fochka"));


// apply example 2

console.log(persone2.about.apply(persone3, ["Reading Book", "Fochka"]));

// bind example 2
// bind always return a function.
const myFunc = persone2.about.bind(persone3, "fb reel", "biriany");

myFunc();



// don't do this mistake
// persone2.about()
// const per2About = persone2.about(persone3, "Reading Book", "Fochka");  x

const per2About = persone2.about.bind(persone3, "Reading Book", "Fochka");

per2About();


// this in arrow function
// arrow function have no this.
// this , inside the arrow function, implies that the function does not have a this value of its own. They don't define their own context since it doesn't have its own this context. They inherit that from the parent scope whenever you call this .

const user1 = {
	firstName: "Adil",
	age: 25,
	about: () => {
		console.log(this.firstName, this.age)
	}
}

user1.about();