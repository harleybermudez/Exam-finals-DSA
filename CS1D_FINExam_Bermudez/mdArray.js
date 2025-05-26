// Prompt the user for a list of names, separated by commas. If nothing is entered, use the default names.
const names = prompt("Enter names separated by commas:", "Genevieve,Juan,Luna,Gabriel,Elise").split(',');
// also Prompt the user but for a list of ages, also separated by commas. If nothing is entered, it is also gonna use the default ages.
const ages = prompt("Enter ages separated by commas:", "24,65,21,5,9").split(',').map(Number);
// Create a new array where each element is an array containing a name and its corresponding age.
const combined = names.map((name, index) => [name, ages[index]]);
for (const pair of combined) {// Will print each name snd age in pair to the console
    console.log(pair);
}