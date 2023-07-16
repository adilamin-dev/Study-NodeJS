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


// call method

const persone2 = {
    firstName: "Adil",
    age: 25,
    about: function () {
        console.log(`My Name is ${this.firstName} and my age is ${this.age}.`)
    }
}

const persone3 = {
    firstName: "Bristy",
    age: 21
}

console.log(persone2.about.call(persone3))