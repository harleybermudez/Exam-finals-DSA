// Prompt the user to enter the first word, or use RACECAr as the default
const word1 = prompt("Enter first word:", "RACECAR");
// Prompt the user to enter the second word, or use RECORDER as the default
const word2 = prompt("Enter second word:", "RECORDER");// function is to check if the given word is a palindrome
// It reverses the word and compares it to the original
// Then it logs the original word, the reversed word, and whether it is a palindrome(all of it)
function checkPalindrome(word) {
    const reversed = word.split('').reverse().join('');
    console.log(`Original: ${word}, Reversed: ${reversed}`);
    console.log(`Is palindrome: ${word === reversed}`);
}// Calling the functions 
checkPalindrome(word1);
checkPalindrome(word2);