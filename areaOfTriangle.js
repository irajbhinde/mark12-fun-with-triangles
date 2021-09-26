const inputBase = document.querySelector(".t-base")
const inputHeight = document.querySelector(".t-height")
const checkBtn = document.querySelector('.btn-check')
const outputDiv = document.querySelector(".output")

function calculateArea(a, b) {
    area = 0.5 * (a * b)
    return area;
}


function areaOfTriangle() {
    const area = calculateArea(Number(inputBase.value), Number(inputHeight.value))
    console.log(area)
    if (Number(inputBase.value) && Number(inputHeight.value)) {
        outputDiv.innerText = "Area of Triangle : " + area
    } else {
        outputDiv.innerText = "Please Enter a Valid Input"
    }
}

checkBtn.addEventListener("click", areaOfTriangle)