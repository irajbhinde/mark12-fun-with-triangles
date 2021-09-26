const inputAngles = document.querySelectorAll(".sides")
const checkBtn = document.querySelector(".btn-check")
const outputDiv = document.querySelector(".output")

function calculateSumOfAngles(a, b, c) {
    sum = a + b + c
    return sum;
}


function IsTriangle() {
    const sum = calculateSumOfAngles(Number(inputAngles[0].value), Number(inputAngles[1].value), Number(inputAngles[2].value))
    if (Number(inputAngles[0].value) && Number(inputAngles[1].value) && Number(inputAngles[2].value)) {
        if (sum === 180) {
            outputDiv.innerText = "It's a Triangle!"
        } else {
            outputDiv.innerText = "It's not a Triangle"
        }
    } else {
        outputDiv.innerText = "Enter Valid Input!"
    }


}



checkBtn.addEventListener("click", IsTriangle)