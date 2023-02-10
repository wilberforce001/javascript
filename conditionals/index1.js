// Set balance and price of item
const balance = 500;
const phone = 600;

// Check if there is enough funds to purchase item
if (phone <= balance) {
	console.log("You have enough money to purchase the item!");
} else {
	console.log("You do not have enough money in your account to purchase this item.");
}

// Set the current grade of the student 
let grade = 87;

// Check if grade is an A, B, C, D, or F
if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else if (grade >= 60) {
  console.log("D");
} else {
  console.log("F")
}

// Ternary Operator

// Set age of user
let age = 20;

// Place result of ternary operation in a variable
const oldEnough = (age >= 21)? "You may enter." : "You may not enter.";


// Using the Switch Statement in Javascript

// Set the current day of the week to a variable, with 0 being Sunday and 6 being Saturday
const day = new Date().getDay();

switch (day) {
	case 0:
		console.log("It's Sunday, time to relax!");
		break;
	case 1:
		console.log("Happy Monday!");
		break;
	case 2:
		console.log("It's Tuesday. You got this!");
		break;
	case 3:
		console.log("Hump day already!");
		break;
	case 4:
		console.log("Just one more day 'til the weekend!");
		break;
	case 5:
		console.log("Happy Friday!");
		break;
	case 6:
		console.log("Have a wonderful Saturday!");
		break;
	default:
		console.log("Something went horribly wrong...");
}

// Set the student's grade
const mark = 87;

switch (true) {
	// If score is 90 or greater
	case mark >= 90:
		console.log("A");
		break;
	// If score is 80 or greater
	case mark >= 80:
		console.log("B");
		break;
	// If score is 70 or greater
	case mark >= 70:
		console.log("C");
		break;
	// If score is 60 or greater
	case mark >= 60:
		console.log("D");
		break;
	// Anything 59 or below is failing
	default:
		console.log("F");
}


// Get number corresponding to the current month, with 0 being January and 11 being December
const month = new Date().getMonth();

switch (month) {
	// January, February, March
	case 0:
	case 1:
	case 2:
		console.log("Winter");
		break;
	// April, May, June
	case 3:
	case 4:
	case 5:
		console.log("Spring");
		break;
	// July, August, September
	case 6:
	case 7:
	case 8:
		console.log("Summer");
		break;
	// October, November, December
	case 9:
	case 10:
	case 11:
		console.log("Autumn");
		break;
	default:
		console.log("Something went wrong.");
}

// Functions
let userName = 'john';

function showMessage() {
	let message = 'Hello, ' + userName;
	alert(message);

}

showMessage();