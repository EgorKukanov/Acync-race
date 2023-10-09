const pagesForm = document.createElement('form');
const buttonGarage = document.createElement('button');
const buttonWinners = document.createElement('button');
const carsForm = document.createElement('form');
const inputName = document.createElement('input');
const inputColor = document.createElement('input');
const buttonCreate = document.createElement('button');
const carList = document.createElement('div');

buttonGarage.type = 'submit';
buttonGarage.textContent = 'TO GARAGE';
buttonGarage.className = 'garage-button';

buttonWinners.type = 'submit';
buttonWinners.textContent = 'TO WINNERS';
buttonWinners.className = 'winners-button';


inputName.type = 'text';
inputName.id = 'car-name';
inputName.placeholder = 'Enter car name';
inputName.classList.add('input-field');

inputColor.type = 'color';
inputColor.id = 'car-color';
inputColor.classList.add('input-field');

buttonCreate.type = 'submit';
buttonCreate.textContent = 'create';
buttonCreate.className = 'submit-button';

carList.id = 'car-list';

pagesForm.appendChild(buttonGarage);
pagesForm.appendChild(buttonWinners);
carsForm.appendChild(inputName);
carsForm.appendChild(inputColor);
carsForm.appendChild(buttonCreate);
carsForm.className = 'form-cars';
pagesForm.className = 'form-pages'

document.body.appendChild(pagesForm);
document.body.appendChild(carsForm);
document.body.appendChild(carList);
