// * Type Conversion
    //converting the data type of a value from one type to another
    //Why type conversion?

// let userData=prompt("Enter a value!");

// console.log(typeof userData);
// console.log(10+userData);

// ! String Conversion
// ? Certain methods require certain data types and will automatically convert data if possible
// String(valueToConvert)

let oneThousand=String(1000);
console.log(typeof oneThousand);
// console.log(oneThousand+200)

let value=false;
console.log(typeof String(value)); //"false"

// ! Number Conversion
//Number(valueToConvert)

let numberOne=Number("10");
let numberTwo=Number("20");

console.log(numberOne+numberTwo);

let numberThree=Number("Two"); 
console.log(numberThree);
// * NaN = not a number - This will be returned if we try to convert a non valid number


// ! Boolean Conversion
//Boolean(valueToConvert)
// * empty value= false /all other value = true
// ? false = 0, or empty, empty string
// ? true = 1, or a value

console.log(Boolean("10")); // true
console.log(Boolean("")) // false

console.log(Boolean(-20))// true

console.log(Boolean(Number("1"))); // true
console.log(Number(Boolean("false"))); //1

console.log(Number(String(10>20)));


// Implicit type conversion (Type Coercion):
console.log('12' / 2);
let expression='12' / 2;
console.log(typeof expression) //number

console.log(2 * '2'); //4
console.log('10' / 2); //5

console.log(true + 7); //8