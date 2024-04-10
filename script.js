    // function reverseWords(inputString) {
    //     // Split the string into words
    //     const words = inputString.split(' ');

    //     // Reverse each word
    //     const reversedWords = words.map(word => {
    //         return word.split('').reverse().join('');
    //     });

    //     // Join the reversed words back into a string
    //     const result = reversedWords.join(' ');

    //     return result;
    // }

    // // Get user input
    // const userInput = prompt("Enter a phrase or words:");

    // // Call the function with user input
    // const result = reverseWords(userInput);
    // console.log(result);

    // document.getElementById("resultText").innerText = result;

    function reverseSalita(input) {
        return input.split('').reverse().join('');
    }

    const userInput = prompt("Enter a phrase or words:");

    const result = reverseSalita(userInput);

    document.getElementById("resultText").innerText = result;

