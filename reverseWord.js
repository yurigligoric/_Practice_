function reverseWords(input){

    return input.split(' ').reverse().join(' ');

}


const userInput = prompt("Enter a phrase or words:");
result = reverseWords(userInput);

document.getElementById("resultText").innerText = result;

//console.log(result)
