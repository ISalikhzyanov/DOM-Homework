const drinkEl = document.getElementById("drink");
const sumEl = document.getElementById("sum");
const resultEl = document.getElementById("result");
const calculateEl = document.getElementById("calculate");

calculateEl.addEventListener('click', () => {
    const drink = drinkEl.value
    const sum = Number(sumEl.value)
    resultEl.textContent = coffee(drink, sum)
})


function coffee(drink, sum) {
    if (sum > 100) {
        summa = sum
    } else {
        console.log("Внесите сумму не более 100 рублей")
    }
    let change = null
    switch (drink) {
        case "3 в 1":
            change = sum - 30
            break;
        case "Черный кофе":
            change = sum - 35
            break;
        case "Черный со сливками":
            change = sum - 40
            break;
        case "Латте":
            change = sum - 45
            break;
    }
    return change

}