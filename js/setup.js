'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var wizards = {
  wizardNames: [ 'Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон' ],
  wizardLast: [ 'да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
  coatColor: [ rgb(101, 137, 164), rgb(241, 43, 107), rgb(146, 100, 161), rgb(56, 159, 117), rgb(215, 210, 55), rgb(0, 0, 0)],
  eyesColor: [ 'black', 'red', 'blue', 'yellow', 'green' ]
}
// generiruem sluchajnie indeksy dlya kazhdogo elementa v massive 'wizards'
 
 function randomInteger(min, max) {
  var rand = min - 0.5 + Math.random() * (max - min + 1)
  rand = Math.round(rand);
  return rand;
}

i = randomInteger(1, wizards.wizardNames.length);
j = randomInteger(1, wizards.wizardLast.length);
k = randomInteger(1, wizards.coatColor.length);
l = randomInteger(1, wizards.eyesColor.length);

// otrisovka maga v DOM
var renderWizard = function (wizards) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  
  wizardElement.querySelector('.setup-similar-label').textContent = wizards.wizardNames[i] + wizards.wizardLast[j];
  wizardElement.querySelector('.wizard-coat').style.fill = wizards.coatColor[k];
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards.eyesColor[l];
  
  return wizardElement;
}
//sozdaem fragment
var fragment = document.createDocumentFragment();

//bezhim po indeksy, sozdaem v fragmente 4eh magov
for (var m = 0; m < 4; m++) {
  fragment.appendChild(renderWizard[m]);
}
//vpisyvaem fragment v 'similarListElement'
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');