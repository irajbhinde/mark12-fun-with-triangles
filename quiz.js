const quizInputs = document.querySelector(".quiz-form")
const submitBtn = document.querySelector(".btn-submit")
const outputDiv = document.querySelector(".output")

const correctAnswers = ['90°', 'Right Angled'];

function calculateScore() {
    var score = 0;
    var index = 0;
    const data = new FormData(quizInputs)
    for (let value of data.values()) {
        if (value === correctAnswers[index]) {
            score = score + 1
        }
        index = index + 1
    }
    outputDiv.innerText = "Score is : " + score
}

submitBtn.addEventListener("click", calculateScore)