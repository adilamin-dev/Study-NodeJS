// proto, prototype, class

const userObj = {
	firstName: "Adil",
	lastName: "Amin",
	email: "adil.it16@gmail.com",
	age: 25,
	address: "Mathurapur, Bajitpur, 2336, Kishoreganj",
	about: function(){
		return `${this.firstName} is ${this.age} years old`
	},
	is18: function(){
		return this.age >= 18;
	}
}


// function
	// 1. create object
	// 2. add key value pair
	// 3. return object
	// best practice for user object methods is store methods on another object and use referance in user object.
	// And set user object proto as userMethods.

const userMethods = {
	about: function(){
		return `${this.firstName} is ${this.age} years old`
	},
	is18: function(){
		return this.age >= 18;
	}
}


function createUser(firstName, lastName, email, age, address){
	const user = Object.create(userMethods);
	user.firstName = firstName;
	user.lastName = lastName;
	user.email = email;
	user.age = age;
	user.address = address;
	return user;
}

const user1 = createUser("Adil", "Amin", "adil.it16@gmail.com", 25, "Mathurapur, Bajitpur, 2336, Kishoreganj");

const user2 = createUser("Adil", "Amin", "adil.it16@gmail.com", 25, "Mathurapur, Bajitpur, 2336, Kishoreganj");

const user3 = createUser("Adil", "Amin", "adil.it16@gmail.com", 25, "Mathurapur, Bajitpur, 2336, Kishoreganj");

console.log(user1.about());