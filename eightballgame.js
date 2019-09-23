const answers = ["The answer is NO", "Ask your mother", "Outlook is good", "Well, why not?", "Emphatically YES!", "The future is unwritten", "How should I know?", "Ask your father"];
console.log(answers);

const myButton = document.querySelector("#a-button");
//console.log(myButton);

myButton.addEventListener('click', () => {
    const input = document.querySelector("#question");
    //console.log(input);
    const inputVal = input.value;
    const isQuestion = inputVal.includes("?");
    if (inputVal.trim() !== "" && isQuestion) {
        input.value = "";
        const randomNum = Math.floor(Math.random() * answers.length);
        const reply = answers[randomNum];
        const message = document.querySelector("#ball-text");
        message.innerText = reply;
    } else {
        alert("Please enter a question");
    }
});