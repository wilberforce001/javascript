// The for...of loop

const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

for (const cat of cats) {
    console.log(cat);

}

const subjects = ['Maths', 'English', 'Kiswahili', 'Biology', 'Physics'];

for (const subject of subjects) {
    console.log(subject);
}

// map() and filter()

function toUpper(string) {
    return string.toUpperCase();
}

const animals = ['Cow', 'Bull', 'Donkey', 'Zebra', 'Horse', 'Pig'];

const upperAnimals = animals.map(toUpper);

console.log(upperAnimals);



// You can use filter() to test each item in a collection, 
// and create a new collection containing only items that match:

function pFoods(food) {
    return food.startsWith('P');

}

const foods = ['Rice', 'Pudding', 'Githeri', 'Eggs', 'Porridge', 'Ugali'];

const filtered = foods.filter(pFoods);

console.log(filtered);


// Looping through collections with a for loop

const men = ['John', 'Mathew', 'Reuben', 'Michael'];

for (const man of men) {
    console.log(man);

}

const people = ['Ken', 'Albert', 'Reuben', 'Thomas'];

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}


// Use a for loop to iterate through an array
// For example, in the code below we want to 
// log a message listing our pets:

const pets = ['Pete', 'Biggles', 'Jasmine'];

let myFavoritePets = 'My pets are called ';

for (const pet of pets) {
    myFavoritePets += `${pet}, `
}

console.log(myFavoritePets);

// The final output sentence of the above code isn't very well-formed:
// We'd prefer it to handle the last pet differently, like this:
// My pets are called Pete, Biggles, and Jasmine.
// But to do this we need to know when we are on the final loop iteration, 
// and to do that we can use a for loop and examine the value of i:

const puppies = ['Pete', 'Biggles', 'Jasmine'];

let myFavoritePuppies = 'My puppies are called ';

for (let i = 0; i < puppies.length; i++) {
    if (i === puppies.length - 1) {
        myFavoritePuppies += `and ${puppies[i]}.`
    } else {
        myFavoritePuppies += `${puppies[i]}, `
    }
}

console.log(myFavoritePuppies);






