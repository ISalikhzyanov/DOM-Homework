const widthEl = document.getElementById("width");
const lenghtEl = document.getElementById("lenght");
const heightEl = document.getElementById("height");
const resultEl = document.getElementById("result");
const calculateEl = document.getElementById("calculate");

calculateEl.addEventListener('click', () => {
    const width = widthEl.value
    const lenght = lenghtEl.value
    const height = heightEl.value
    resultEl.textContent = room(width, lenght, height)
})


function room(width, lenght, height) {
    return Math.ceil((width * height * 2) + (lenght * height * 2) / (0.53 * 10))

}