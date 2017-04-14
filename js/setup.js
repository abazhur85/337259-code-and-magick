'use strict';

var userDialog = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');

var onEscPress = function(evt) {
    if (evt.keyCode === 27) {
        closePopup();
    }
};

var closePopup = function() {
   setup.classList.add('hidden');
   document.removeEventListener('keydown', onEscPress);
};

var openPopup = function() {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onEscPress);
};

setupOpen.addEventListener('click', function() {
   openPopup();
});

setupClose.addEventListener('click', function() {
  closePopup();
});

var ENTER_KEY_CODE = 13;

var isActivationEvent = function (evt) {
    return evt.keyCode === ENTER_KEY_CODE;
}

setupOpen.addEventListener('keydown', function(evt) {
    if (isActivationEvent(evt)){
        openPopup();
    }
});

setupClose.addEventListener('keydown', function(evt) {
    if (isActivationEvent(evt)){
        closePopup();
    }
});

//Validaciya imeno polzovatelya
var username = setup.querySelector('.setup-user-name');
username.required = true;
username.maxlength = 50;

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var wizards = {
    wizardNames: [ 'Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон' ],
    wizardLast: [ 'да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
    coatColor: [ 'rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 1610', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    eyesColor: [ 'black', 'red', 'blue', 'yellow', 'green' ],
    fireBall: [ '#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848' ]
}

// generiruem sluchajnie indeksy dlya kazhdogo elementa v massive 'wizards'
var getRandomElement = function(set) {
    var randomElementIndex = Math.floor(Math.random() * set.length);
    return set[randomElementIndex];
};

// otrisovka maga v DOM
var renderWizard = function () {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').innerHTML = getRandomElement(wizards.wizardNames) +'<br>'+ getRandomElement(wizards.wizardLast);
    wizardElement.querySelector('.wizard-coat').style.fill = getRandomElement(wizards.coatColor);
    wizardElement.querySelector('.wizard-eyes').style.fill = getRandomElement(wizards.eyesColor);
  
    return wizardElement;
}

//naznachaem peremennie glavnomy magy
var wizard = document.querySelector('.wizard');
var mainWizardCoat = wizard.querySelector('.wizard-coat');
var mainWizardEyes = wizard.querySelector('.wizard-eyes');
var mainWizardFireball = document.querySelector('.setup-fireball-wrap');


//menyaem coat glavnogo maga clickom na coat
mainWizardCoat.addEventListener('click', function() {
   mainWizardCoat.style.fill = getRandomElement(wizards.coatColor);
});

mainWizardEyes.addEventListener('click', function () {
   mainWizardEyes.style.fill = getRandomElement(wizards.eyesColor);
});

mainWizardFireball.addEventListener('click', function() {
   mainWizardFireball.style.background = getRandomElement(wizards.fireBall);
});

//sozdaem fragment
var fragment = document.createDocumentFragment();

//bezhim po indeksy, sozdaem v fragmente 4eh magov
for (var i = 0; i < 4; i++) {
    fragment.appendChild(renderWizard());
}
//vpisyvaem fragment v 'similarListElement'
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');