const pagesForm = document.createElement("form");
const createForm = document.createElement("form");
const updateForm = document.createElement("form");
const paginationForm = document.createElement("form");
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
const textPage = document.createElement("p");
const carList = document.createElement("div");
const buttonPrev = document.createElement("button");
const buttonNext = document.createElement("button");


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

buttonGenerate.type = "button";
buttonGenerate.textContent = "GENERATE CARS";
buttonGenerate.id = "generateButton";

buttonPrev.type = "button";
buttonPrev.textContent = "PREV";
buttonPrev.className = "prev-button"

buttonNext.textContent = "NEXT";
buttonNext.type = "button";
buttonNext.className = "next-button"


textGarage.id = 'garageText';
textGarage.textContent = 'GARAGE (0)';
textPage.id = 'pageText';
textPage.textContent = 'Page #1'

carList.id = "carList";

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
paginationForm.append(buttonPrev);
paginationForm.append(buttonNext);

pagesForm.className = "form-pages";
createForm.className = "form-cars";
updateForm.className = "form-cars";
controllersForm.className = "form-controllers";
paginationForm.className = "form-pagination"

document.body.appendChild(pagesForm);
document.body.appendChild(createForm);
document.body.appendChild(updateForm);
document.body.appendChild(controllersForm);
document.body.appendChild(textGarage);
document.body.appendChild(textPage);
document.body.appendChild(carList);
document.body.appendChild(paginationForm);


// controllers


let cars = [];
let currentPage = 1;

function displayCars(page) {
    carList.innerHTML = '';
    let start = (page - 1) * 7;
    let end = start + 7;
    let pageCars = cars.slice(start, end);

    pageCars.forEach(car => {
        carList.appendChild(car.row1);
        carList.appendChild(car.row2);
        carList.appendChild(car.lineDashed);
    });
}

let count = 0;

buttonCreate.addEventListener('click', () => {
    const row1 = document.createElement("div");
    const row2 = document.createElement("div");

    const selectButton = document.createElement("button");
    selectButton.type = "button"
    selectButton.className = "select";
    selectButton.textContent = "Select";

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.className = "remove";
    removeButton.textContent = "Remove";

    const carName = document.createElement("span");
    carName.className = "car-name";
    carName.textContent = inputNameCreate.value;

    row1.appendChild(selectButton);
    row1.appendChild(removeButton);
    row1.appendChild(carName);

    const buttonA = document.createElement("button");
    buttonA.type = "button"
    buttonA.className = "A";
    buttonA.textContent = "A";

    const buttonB = document.createElement("button");
    buttonB.type = "button"
    buttonB.className = "B";
    buttonB.textContent = "B";

    const carImage = document.createElement("img");
    carImage.className = "car-image"
    carImage.src = "./assets/car.svg";
    carImage.alt = "car-image";

    const flagImage = document.createElement("img");
    flagImage.className = "flag-image"
    flagImage.src = "./assets/flag.png";
    flagImage.alt = "flag-image";

    row2.appendChild(buttonA);
    row2.appendChild(buttonB);
    row2.appendChild(carImage);
    row2.appendChild(flagImage);

    const lineDashed = document.createElement("div");
    lineDashed.className = 'line-dashed'

    cars.push({ row1, row2, lineDashed });

    displayCars(currentPage);

    count += 1;
    garageText.textContent = `GARAGE (${count})`;
    if (count > 7) {
        textPage.textContent = `Page #${Math.floor(count / 7) + 1}`;
    }
})


buttonGenerate.addEventListener('click', () => {
    count += 100;
    garageText.textContent = `GARAGE (${count})`;
    if (count > 7) {
        textPage.textContent = `Page #${Math.floor(count / 7) + 1}`;
    }
})

buttonPrev.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        displayCars(currentPage);
    }
});

buttonNext.addEventListener('click', () => {
    if (currentPage < Math.ceil(cars.length / 7)) {
        currentPage++;
        displayCars(currentPage);
    }
});

