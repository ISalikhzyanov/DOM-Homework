const consEl = document.getElementById("cons");
const restEl = document.getElementById("rest");
const resultEl = document.getElementById("result");
const calculateEl = document.getElementById("calculate");

calculateEl.addEventListener('click', () => {
    const restValue = restEl.value
    const consValue = consEl.value
    resultEl.textContent = dist(restValue, consValue)
})


function dist(consValue, restValue) {
    return Math.round((consValue/ restValue) * 100)
}