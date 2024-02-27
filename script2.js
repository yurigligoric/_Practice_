var reverseVowels = function(s) {
    let sArray = s.split('');

    const isVowel = (char) => ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    let left = 0;
    let right = sArray.length - 1;

    while (left < right)
    {
        //find the leftmost vowel
        while(left <right && !isVowel(sArray[left])){
            left++;
        }

        //find the rightmost vowel
        while(left < right && !isVowel(sArray[right])){
            right--;
        }

        [sArray[left], sArray[right]] = [sArray[right], sArray[left]];

        left++;
        right--;

    }

    return sArray.join('');
}

console.log(reverseVowels("hello"));
console.log(reverseVowels("leetcode")); 