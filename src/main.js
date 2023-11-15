let calculation = '';

function updateCalculation(value) {
    calculation += value;

    displayCalculation();
}

function displayCalculation() {
    document.querySelector('.js-calculation').value = calculation;
}

function deleteLastCharacter() {
    calculation = calculation.slice(0, -1);
    displayCalculation();
}
