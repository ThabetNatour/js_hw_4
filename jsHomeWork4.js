'use strict';

//תאבת נאטור חגאגרה - 212790406
//חכם נאטור - 318486479

//#region - Arrow Functions from task 1 to 5 :


//Task 1 Arrow Functions : function to addExclamation > ! in the end of string :
const Task1 = "you will see Exclamation in the end"
const addExclamation = str => str + "!";
console.log(addExclamation(Task1));


//Task 2 Arrow functions : reverse the sentence :
const Task2 = "I love JS"
const reverseWords = str => str.split(" ").reverse().join(" ");
console.log(reverseWords(Task2));


//Task 3 Arrow functions : every number squared :
const Task3 = [1, 2, 3];
const squareAll = arr => arr.map(num => num * num);
console.log(squareAll(Task3))


//Task 4 Arrow functions : return name if its length is more that the number
let Task4 = ["Dan", "jonathan", "Thabet", "sod", 3];
const names = Task4.slice(0, -1);
const minLength = Task4[Task4.length - 1]; // Corrected
const filterNames = (names, minLength) => names.filter(name => name.length > minLength);
console.log(filterNames(names, minLength));


//Task 5 Arrow functions : return true if all the numbers are positive, else false
const Task5 = [1, 2, 3, 4, 5]
const allPositive = numbers => numbers.every(num => num > 0);
console.log(allPositive(Task5));

//#endregion - Arrow Functions