function isPalindrome(word) {
  // Remove non-letter characters and convert to lowercase
  const cleanWord = word.toLowerCase().replace(/[^a-z]/g, '');

  // Check if the clean word is the same forwards and backwards
  return cleanWord === cleanWord.split('').reverse().join('');
}

// Test cases
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("level")); // true
console.log(isPalindrome("Was it a car or a cat I saw?")); // true
console.log(isPalindrome("A man, a plan, a canal, Panama!")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("hello world")); // false
console.log(isPalindrome("")); // true
