function isPalindrome(string) {
  // Convert the string to lowercase
  string = string.toLowerCase();

  // Remove any non-alphabetic characters from the string
  string = string.replace(/[^a-z]/g, '');

  // Check if the reversed string is equal to the original string
  return string === string.split('').reverse().join('');
}

/*
  Pseudocode:
  1. Convert the string to lowercase.
  2. Remove any non-alphabetic characters from the string using a regular expression.
  3. Check if the reversed string is equal to the original string.
  4. Return true if the string is a palindrome, false otherwise.

  Explanation:
  - The function first converts the string to lowercase to ensure case-insensitive palindrome comparison.
  - It then removes any non-alphabetic characters from the string using a regular expression (/[^a-z]/g).
  - The string is converted into an array of characters using the split('') method.
  - The array is reversed using the reverse() method.
  - The reversed array is joined back into a string using the join('') method.
  - Finally, the function checks if the reversed string is equal to the original string and returns the result.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
