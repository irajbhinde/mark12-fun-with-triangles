const inputSides = document.querySelectorAll(".sides")
const checkBtn = document.querySelector(".btn-check")
const outputDiv = document.querySelector(".output")

function calculateHypotenuse(a, b) {
    const result = Math.sqrt(a ** 2 + b ** 2)
    return result
}



function checkHypotenuse() {
    const result = calculateHypotenuse(Number(inputSides[0].value), Number(inputSides[1].value))
    if (Number(inputSides[0].value) && Number(inputSides[1].value)) {
        outputDiv.innerText = "Hypotenuse = " + result
    } else {
        outputDiv.innerText = "Please Enter a Valid Input"
    }
}







checkBtn.addEventListener("click", checkHypotenuse)