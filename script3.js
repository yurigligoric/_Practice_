
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  var splitWords = s.split(" ");
  
  var reverseWords = splitWords.reverse();

  var joinedWords = reverseWords.join(" ")

  return joinedWords;
};

console.log(reverseWords("hello there how are you in the joinedWords"));
