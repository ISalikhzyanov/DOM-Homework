const dayEl = document.getElementById("day");
const monthEl = document.getElementById("month");
const resultEl = document.getElementById("result");
const calculateEl = document.getElementById("calculate");

calculateEl.addEventListener('click', () => {
    const day = dayEl.value
    const month = monthEl.value
    resultEl.numberContent = qw(month, day)
})

function qw(month, day) {

let znak = undefined
    switch (month) {
        case 1:
            if (day <= 19) {
                znak = "Kozerog"
            } else {
                znak = "Vodoley"
            }
            break;
        case 2:
            if (day <= 19) {
                znak = "Vodoley"
            } else {
                znak = "Ryby"
            }
            break;
        case 3:
            if (day <= 20) {
                znak = "Ryby"
            } else {
                znak = "Oven"
            }
            break;
        case 4:
            if (day <= 20) {
                znak = "Oven"
            } else {
                znak = "Telec"
            }
            break;
        case 5:
            if (day <= 21) {
                znak = "Telec"
            } else {
                znak = "Bliznecy"
            }
            break;
        case 6:
            if (day <= 21) {
                znak = "Bliznecy"
            } else {
                znak = "Rak"
            }
            break;
        case 7:
            if (day <= 22) {
                znak = "Rak"
            } else {
                znak = "Lev"
            }
            break;
        case 8:
            if (day <= 22) {
                znak = "Lev"
            } else {
                znak = "Deva"
            }
            break;
        case 9:
            if (day <= 22) {
                znak = "Deva"
            } else {
                znak = "Vesy"
            }
            break;
        case 10:
            if (day <= 22) {
                znak = "Vesy"
            } else {
                znak = "Scorpyon"
            }
            break;
        case 11:
            if (day <= 21) {
                znak = "Scorpyon"
            } else {
                znak = "Strelec"
            }
            break;
        case 12:
            if (day <= 21) {
                znak = "Strelec"
            } else {
                znak = "Kozrog"
            }
            break;

    }
    return znak
}
