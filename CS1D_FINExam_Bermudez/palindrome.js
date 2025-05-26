// Ask the user to enter numbers separated by commas, or use the default numbers if nothing is entered
const numbers = prompt("Enter numbers separated by commas:", "24,65,21,5,9,32,42,80,57").split(',').map(Number);
// Ask the user to enter names separated by commas, or use the default names if nothing is entered
const names = prompt("Enter names separated by commas:", "Zenvo,Erica,Jordie,Alicia,Redon").split(',');
// Merge the numbers and names arrays into one array and print it to the console
const merged = numbers.concat(names);
console.log("Merged array:", merged);
// Sort the numbers in reverse order and print the result
console.log("Numbers sorted (reverse):", [...numbers].sort((a, b) => b - a));
// Sort the names alphabetically (A-Z) .sortttttt and print the result
console.log("Names sorted (A-Z):", [...names].sort());