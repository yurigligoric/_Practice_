function baligtade(input) {
    const reverse = input.split('').reverse().join('');
    return reverse
}

const userInput = prompt("Enter a phrase or words:");

const result = baligtade(userInput);

document.getElementById("resultText").innerText = result;

    