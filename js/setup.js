'use strict';
var SETUP_BLOCK = document.querySelector('.setup');
var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var mockDataQuantiny = 4;
var SIMILAR_WIZARD_TEMPLATE = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var SETUP_SIMILAR_WIZARDS_BLOCK = document.querySelector('.setup-similar');
var SETUP_SIMILAR_WIZARDS_LIST_BLOCK = document.querySelector('.setup-similar-list');

var switchSetupWindow = function () {
  if (SETUP_BLOCK.classList.contains('hidden')) {
    SETUP_BLOCK.classList.remove('hidden');
  } else {
    SETUP_BLOCK.classList.add('hidden');
  }
};

var switchSetupSimilarWizards = function () {
  if (SETUP_SIMILAR_WIZARDS_BLOCK.classList.contains('hidden')) {
    SETUP_SIMILAR_WIZARDS_BLOCK.classList.remove('hidden');
  } else {
    SETUP_SIMILAR_WIZARDS_BLOCK.classList.add('hidden');
  }
};

var getRandomValue = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

var genereteMock = function (quantiny) {
  var mock = [];
  for (var i = 0; i < parseInt(quantiny, 10); i++) {
    mock[i] = {
      'name': getRandomValue(0, 1) === 0 ? NAMES[getRandomValue(0, NAMES.length - 1)] + ' ' + LAST_NAMES[getRandomValue(0, NAMES.length - 1)] : LAST_NAMES[getRandomValue(0, NAMES.length - 1)] + ' ' + NAMES[getRandomValue(0, NAMES.length - 1)],
      'coatColor': COAT_COLORS[getRandomValue(0, COAT_COLORS.length - 1)],
      'eyesColor': EYES_COLORS[getRandomValue(0, EYES_COLORS.length - 1)]
    };
  }
  return mock;
};

var generateWizardsBlock = function (wizardData) {
  var wizardBlock = SIMILAR_WIZARD_TEMPLATE.cloneNode(true);
  wizardBlock.querySelector('.setup-similar-label').textContent = wizardData.name;
  wizardBlock.querySelector('.wizard-coat').style = 'fill: ' + wizardData.coatColor;
  wizardBlock.querySelector('.wizard-eyes').style = 'fill: ' + wizardData.eyesColor;
  return wizardBlock;
};

var appendSimilarWizards = function (wizardsData) {
  var wizardsListFragment = document.createDocumentFragment();
  for (var i = 0; i < wizardsData.length; i++) {
    wizardsListFragment.appendChild(generateWizardsBlock(wizardsData[i]));
  }
  SETUP_SIMILAR_WIZARDS_LIST_BLOCK.appendChild(wizardsListFragment);
};

switchSetupWindow();
appendSimilarWizards(genereteMock(mockDataQuantiny));
switchSetupSimilarWizards();
