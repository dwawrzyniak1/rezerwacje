function init() {
    let range = document.getElementById("amount-of-people");
    range.addEventListener("input", updateAmountOfPeople);
}

function updateAmountOfPeople() {
    let input = document.getElementById("amount-of-people");
    let output = document.getElementById("amount-of-people-output");
    output.textContent = input.value.toString();
}

init();