const pagesForm = document.createElement("form");
const createForm = document.createElement("form");
const updateForm = document.createElement("form");
const controllersForm = document.createElement("form");
const buttonGarage = document.createElement("button");
const buttonWinners = document.createElement("button");
const buttonCreate = document.createElement("button");
const buttonUpdate = document.createElement("button");
const buttonRace = document.createElement("button");
const buttonReset = document.createElement("button");
const buttonGenerate = document.createElement("button");
const inputNameCreate = document.createElement("input");
const inputColorCreate = document.createElement("input");
const inputNameUpdate = document.createElement("input");
const inputColorUpdate = document.createElement("input");
const textGarage = document.createElement("p");
const carList = document.createElement("div");

buttonGarage.type = "submit";
buttonGarage.textContent = "TO GARAGE";
buttonGarage.className = "garage-button";

buttonWinners.type = "submit";
buttonWinners.textContent = "TO WINNERS";
buttonWinners.className = "winners-button";

inputNameCreate.type = "text";
inputNameCreate.id = "car-name";
inputNameCreate.placeholder = "Enter car name";
inputNameCreate.classList.add("input-field");

inputNameUpdate.type = "text";
inputNameUpdate.id = "cat-name";
inputNameUpdate.placeholder = "Enter car name";
inputNameUpdate.classList.add("input-field");

inputColorCreate.type = "color";
inputColorCreate.id = "car-color";
inputColorCreate.classList.add("input-field");

inputColorUpdate.type = "color";
inputColorUpdate.id = "car-color";
inputColorUpdate.classList.add("input-field");

buttonCreate.type = "button";
buttonCreate.textContent = "CREATE";
buttonCreate.className = "create-button";

buttonUpdate.type = "submit";
buttonUpdate.textContent = "UPDATE";
buttonUpdate.className = "update-button";

buttonRace.type = "submit";
buttonRace.textContent = "RACE";
buttonRace.className = "race-button";

buttonReset.type = "submit";
buttonReset.textContent = "RESET";
buttonReset.className = "reset-button";

buttonGenerate.type = "submit";
buttonGenerate.textContent = "GENERATE CARS";
buttonGenerate.className = "generate-button";

textGarage.id = 'garageText';
textGarage.textContent = 'GARAGE(0)';
let count = 0;
buttonCreate.addEventListener('click', () => {
    count += 1;
    garageText.textContent = `GARAGE(${count})`;
})

carList.id = "car-list";

pagesForm.appendChild(buttonGarage);
pagesForm.appendChild(buttonWinners);
createForm.appendChild(inputNameCreate);
createForm.appendChild(inputColorCreate);
createForm.appendChild(buttonCreate);
updateForm.appendChild(inputNameUpdate);
updateForm.appendChild(inputColorUpdate);
updateForm.appendChild(buttonUpdate);
controllersForm.append(buttonRace);
controllersForm.append(buttonReset);
controllersForm.append(buttonGenerate);

pagesForm.className = "form-pages";
createForm.className = "form-cars";
updateForm.className = "form-cars";
controllersForm.className = "form-controllers";

document.body.appendChild(pagesForm);
document.body.appendChild(createForm);
document.body.appendChild(updateForm);
document.body.appendChild(controllersForm);
document.body.appendChild(carList);
document.body.appendChild(textGarage);
