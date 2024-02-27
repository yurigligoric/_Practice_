var reversetext = (s) => {
        var splitwords = s.split("")

        var reverseWords = splitwords.reverse();

        var joinedWords = reverseWords.join("");

        return joinedWords;
}

console.log(reversetext("hello word you are out there"));