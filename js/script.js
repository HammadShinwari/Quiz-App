
// ============= step 01 Questions =============

let quizData = [
    {
        question : "Which keyword is used to declare a function in JavaScript?",
        options : [
            "function",
            "method",
            "def",
            "procedure"
        ],
        correct : 0
    },
    {
        question : "Which keyword is used to declare a variable in JavaScript?",
        options : [
            "var",
            "v",
            "variable",
            "int"
        ],
        correct : 0
    },
    {
        question : "How do you write a single-line comment in JavaScript?",
        options : [
            "/* comment */",
            "// comment",
            "--comment--",
            "'comment'"
        ],
        correct : 1
    },
    {
        question : "What does the 'DOM' stand for in JavaScript?",
        options : [
            "Document Object Model",
            "Data Output Module",
            "Document Object Method",
            "Dynamic Object Manipulation"
        ],
        correct : 0
    },
    {
        question : "What does the === operator do in JavaScript?",
        options : [
            "Compares values for equality",
            "Assigns a value",
            "Checks for strict equality",
            "Concatenates strings"
        ],
        correct : 2
    },
    {
        question : "How can you check the length of an array in JavaScript?",
        options : [
            "array.size",
            "array.length",
            "array.sizeOf",
            "array.count"
        ],
        correct : 1
    },
    {
        question : "How do you declare a function in JavaScript?",
        options : [
            "def myFunction() {}",
            "function myFunction() {}",
            "void myFunction() {}",
            "declare function myFunction() {}"
        ],
        correct : 1
    },
    {
        question : "What is the role of the 'this' keyword in JavaScript?",
        options : [
            "Refers to the current object",
            "Declares a new variable",
            "Represents the global scope",
            "Points to the next element in an array"
        ],
        correct : 0
    }

];


// ============= step 02 Javascript initialization =============

let quiz = document.querySelector("#quiz")
let answerElm = document.querySelectorAll(".answer");
let [questionElm, option_1, option_2, option_3, option_4] = document.querySelectorAll("#question, #option_1, #option_2, #option_3, #option_4");
let submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

// ============= step 03 Load Quiz Function =============

let loadQuiz = () => {
    let {question, options} = quizData[currentQuiz];
    console.log(options);

    questionElm.innerHTML = `${currentQuiz + 1}: ${question}`;

    options.forEach((curOption, index) => {
        (window[`option_${index + 1}`].innerHTML = curOption)
    })
}

loadQuiz();

// ============= step 04 button ke click karne par answer select hoga =============

let getSelectedOption = () => {

    // let ans_index;
    // answerElm.forEach((curOption, index) => {
    //     if(curOption.checked) {
    //         ans_index = index;
    //     }
    // })
    // return ans_index;

    let answerElement = Array.from(answerElm);
    return answerElement.findIndex((curElem) => curElem.checked);
}

let deSelectedAnswers = () => {
    answerElm.forEach((curElem) => curElem.checked = false);
}

submitBtn.addEventListener('click', () => {

    let selectedOptionIndex = getSelectedOption();
    console.log(selectedOptionIndex);

    if(selectedOptionIndex === quizData[currentQuiz].correct){
        score = score + 1;
    }

    currentQuiz++;

    if(currentQuiz < quizData.length){
        deSelectedAnswers();
        loadQuiz();
    } else {
        quiz.innerHTML = `<div class = "result">
                        <h2>🏆 Your Score : ${score}/${quizData.length} Correct Answer</h2>
                        <p>Congratulation on completing the quiz 🎉🎉🎉</p>
                        <div class="reload-btn">
                        <button class="reload-button" onclick="window.location = '../index.html'">Play Again</button>
                        </div>
                        </div> `
    }
})