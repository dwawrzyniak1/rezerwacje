const accomodation = {
    "Hi Hostel Porto R. de Paulo da Gama 551, 4169-006 Porto, Portugalia" : 80,
    "Example Hotel Porto H. de Salsa Alvaro 223, 4169-006 Porto, Portugalia" : 130,
    "Super Hotel Porto H. de Salsa Alvaro 223, 4169-006 Porto, Portugalia" : 110
}

const transport = {
    "Lot Ryanair": 320,
    "Lot Wizzair": 420
}

function updateAccomodationPrice(){
    let priceSpan = document.getElementById("accomodation-price");
    let select = document.getElementById("accomodation");
    let key = select.options[select.selectedIndex].textContent;
    let amountOfPeople = document.getElementById("amount-of-people").value;
    priceSpan.textContent = accomodation[key] * amountOfPeople + " zł/noc";
}

function updateTotalPrice() {
    let total = document.getElementById("total-price");
    let accomodationPrice = document.getElementById("accomodation-price").textContent;
    let transportPrice = document.getElementById("transport-price").textContent;

    total.textContent = parseInt(accomodationPrice) + parseInt(transportPrice) + " zł";
}

function updateAccomodation(){
    updateAccomodationPrice();
    updateTotalPrice();
}

Element.prototype.appendOption = function(key){
    let option = document.createElement("option");
    option.textContent = key;
    this.appendChild(option);
}

function fillOptionsWithData(accomodationInput, accomodation) {
    Object.keys(accomodation).forEach(
        key => accomodationInput.appendOption(key)
    );
}

function updateTransportPrice() {
    let priceSpan = document.getElementById("transport-price");
    let select = document.getElementById("transport");
    let key = select.options[select.selectedIndex].textContent;
    let amountOfPeople = document.getElementById("amount-of-people").value;
    priceSpan.textContent = transport[key] * amountOfPeople + " zł/obie strony";
}

function updateTransport() {
    updateTransportPrice();
    updateTotalPrice();
}

function updateAmountOfPeople() {
    updateAccomodationPrice();
    updateTransportPrice();
    updateTotalPrice();
}

function init(){
    let accomodationInput = document.getElementById("accomodation");
    fillOptionsWithData(accomodationInput, accomodation);
    accomodationInput.addEventListener("change", updateAccomodation);

    let transportInput = document.getElementById("transport");
    fillOptionsWithData(transportInput, transport);
    transportInput.addEventListener("change", updateTransport);

    let peopleTransport = document.getElementById("amount-of-people");
    peopleTransport.addEventListener("input", updateAmountOfPeople)
}

init();