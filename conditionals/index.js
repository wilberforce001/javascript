//Conditional (ternary) operator

function getFee(isMember) {
    return (isMember ? '$2.00' : '$10.00');
}

console.log(getFee(true));

console.log(getFee(false));

console.log(getFee(null));



const age = 26;
const beverage = age >= 21 ? "Beer" : "Juice";

console.log(beverage);

//Handling null values

const greeting = (person) => {
    const name = person ? person.name : "stranger";
    return `Howdy, ${name}`;
}

console.log(greeting({name: "Alice"}));
console.log(greeting(null));


//Conditional chains

function example() {
    return condition1 ? value1
          : condition2 ? value2
          : condition3 ? value3
          : value4;
  }


  // The above conditional chain is equivalent to the following if...else chain.
  function example() {
    if (condition1) {
      return value1;
    } else if (condition2) {
      return value2;
    } else if (condition3) {
      return value3;
    } else {
      return value4;
    }
  }
  
  

