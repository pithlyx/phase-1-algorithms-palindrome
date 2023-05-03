function isPalindrome(word) {
  // Write your algorithm here
  let valid = false
  // console.log(word)
  for (let i = 0; i <= Math.ceil(word.length/2-1); i++) {
    // console.log(word[i], word[word.length - (i + 1)])
    valid = (word[i] === word[word.length - (i + 1)]) ? true : false;
    if (!valid) {break}
  }
  // console.log(valid)
  return valid
}

/* 
  Add your pseudocode here

  compare the first element to the last element
  step the first element index up and the last element index down
  repeat till you reach the "middle" of the word
  */

/*
  Add written explanation of your solution here

  First we set "valid" to false (valid will be used to track whether the word is a palindrome)
  Then we have a for loop that will loop through each letter of the word
      <-- The for loop will only loop through the first half of the word by dividing the 
      word length by 2 and rounding up so we do not run the same checks multiple times --->
  Next we compare the letter at the index "[i]" to "word.length - ([i] + 1)"
      <-- We use word.length-i+1 in order to read the proper "mirrored" letter -->
  If the letters in the mirrored positions match then valid is true and we move to the next letter pair
  Once we reach the middle of the word we return the value of valid
      <-- If we encounter a pair of letters that do not match we break the 
      operation so we aren't checking a word after it is invalid -->

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
