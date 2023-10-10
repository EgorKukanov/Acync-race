const pagesForm = document.createElement("form");
const createForm = document.createElement("form");
const updateForm = document.createElement("form");
const buttonGarage = document.createElement("button");
const buttonWinners = document.createElement("button");
const buttonCreate = document.createElement("button");
const buttonUpdate = document.createElement("button");
const inputNameCreate = document.createElement("input");
const inputColorCreate = document.createElement("input");
const inputNameUpdate = document.createElement("input");
const inputColorUpdate = document.createElement("input");
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

buttonCreate.type = "submit";
buttonCreate.textContent = "create";
buttonCreate.className = "submit-button";

buttonUpdate.type = "submit";
buttonUpdate.textContent = "update";
buttonUpdate.className = "submit-button";

carList.id = "car-list";

pagesForm.appendChild(buttonGarage);
pagesForm.appendChild(buttonWinners);
createForm.appendChild(inputNameCreate);
createForm.appendChild(inputColorCreate);
createForm.appendChild(buttonCreate);
updateForm.appendChild(inputNameUpdate);
updateForm.appendChild(inputColorUpdate);
updateForm.appendChild(buttonUpdate);
pagesForm.className = "form-pages";
createForm.className = "form-cars";
updateForm.className = "form-cars";

document.body.appendChild(pagesForm);
document.body.appendChild(createForm);
document.body.appendChild(updateForm);
document.body.appendChild(carList);
