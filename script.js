'use strict';

const QUESTIONS_PER_GAME = 5;

const ELEMENTS = [
  {
    name: 'lithium',
    symbol: 'Li',
    question: 'Jsem nejlehčí kov, plamen barvím karmínově červeně a pomáhám lidem v psychiatrii.',
    reaction: 'Skvěle! Máš postřeh jako nabitá baterka!',
    emoji: '🔋',
    image: 'images/lithium.jpg',
    imageAlt: 'Doprovodný obrázek k nápovědě pro prvek lithium',
    fallbackEmoji: '🔋'
  },
  {
    name: 'sodík',
    symbol: 'Na',
    question: 'Jsem velmi měkký kov, plamen barvím oranžově a jsem v kuchyňské soli.',
    reaction: 'Slaná trefa! Jsi hvězda!',
    emoji: '🧂',
    image: 'images/sodik.jpg',
    imageAlt: 'Doprovodný obrázek k nápovědě pro prvek sodík',
    fallbackEmoji: '🧂'
  },
  {
    name: 'draslík',
    symbol: 'K',
    question: 'Jsem výbušné dvojče sodíku. Ve vodě dělám randál a plamen barvím fialově.',
    reaction: 'Magicky fialová trefa!',
    emoji: '💥',
    image: 'images/draslik.jpg',
    imageAlt: 'Doprovodný obrázek k nápovědě pro prvek draslík',
    fallbackEmoji: '💥'
  },
  {
    name: 'hořčík',
    symbol: 'Mg',
    question: 'Svítím oslepujícím bílým světlem, pomáhám proti křečím v nohách a tvořím slitinu dural.',
    reaction: 'Oslnivý výsledek!',
    emoji: '✨',
    image: 'images/horcik.jpg',
    imageAlt: 'Doprovodný obrázek k nápovědě pro prvek hořčík',
    fallbackEmoji: '✨'
  },
  {
    name: 'vápník',
    symbol: 'Ca',
    question: 'Jsem kov alkalických zemin, tvořím tvé kosti a zuby a najdeš mě v mléce.',
    reaction: 'Pevná odpověď jako tvoje kosti!',
    emoji: '🦴',
    image: 'images/vapnik.jpg',
    imageAlt: 'Doprovodný obrázek k nápovědě pro prvek vápník',
    fallbackEmoji: '🦴'
  },
  {
    name: 'železo',
    symbol: 'Fe',
    question: 'Jsem nejdůležitější kov pro lidstvo. S uhlíkem tvořím ocel a v krvi rozvážím kyslík.',
    reaction: 'Jsi silný jako ocel!',
    emoji: '🌉',
    image: 'images/zelezo.jpg',
    imageAlt: 'Doprovodný obrázek k nápovědě pro prvek železo',
    fallbackEmoji: '🌉'
  },
  {
    name: 'měď',
    symbol: 'Cu',
    question: 'Jsem ušlechtilý kov, skvěle vedu elektřinu a ničím bakterie na svém povrchu.',
    reaction: 'Výborně! Jsi prostě „vodivý“ student!',
    emoji: '🔌',
    image: 'images/med.jpg',
    imageAlt: 'Doprovodný obrázek k nápovědě pro prvek měď',
    fallbackEmoji: '🔌'
  },
  {
    name: 'zinek',
    symbol: 'Zn',
    question: 'Obalím ocel, aby nerezavěla. Najdeš mě i v krému na opalování, aby ses nespálil.',
    reaction: 'Přesně tak! Ochránce barev i kovů!',
    emoji: '☀️',
    image: 'images/zinek.jpg',
    imageAlt: 'Doprovodný obrázek k nápovědě pro prvek zinek',
    fallbackEmoji: '☀️'
  },
  {
    name: 'stříbro',
    symbol: 'Ag',
    question: 'Jsem nejlepší vodič elektřiny a při úderu vydávám jasný zvonivý zvuk, proto jsem ve zvonech.',
    reaction: 'Čistý zásah! Zvoní to správně!',
    emoji: '🔔',
    image: 'images/stribro.jpg',
    imageAlt: 'Doprovodný obrázek k nápovědě pro prvek stříbro',
    fallbackEmoji: '🔔'
  },
  {
    name: 'platina',
    symbol: 'Pt',
    question: 'Jsem velmi drahý kov, vůbec nekoroduji a vydržím teplotu přes 1700 °C.',
    reaction: 'Luxusní a odolná odpověď!',
    emoji: '💍',
    image: 'images/platina.jpg',
    imageAlt: 'Doprovodný obrázek k nápovědě pro prvek platina',
    fallbackEmoji: '💍'
  },
  {
    name: 'zlato',
    symbol: 'Au',
    question: 'Jsem nesmrtelný král kovů. Nerezavím, neztrácím lesk a vydržím tisíce let.',
    reaction: 'Zlatý bludišťák pro tebe!',
    emoji: '👑',
    image: 'images/zlato.jpg',
    imageAlt: 'Doprovodný obrázek k nápovědě pro prvek zlato',
    fallbackEmoji: '👑'
  },
  {
    name: 'rtuť',
    symbol: 'Hg',
    question: 'Jsem jediný kov, který je při pokojové teplotě tekutý. Jsem stříbřitý, ale jedovatý.',
    reaction: 'Tekutá pravda! Pozor, ať se nerozutečeš!',
    emoji: '🌡️',
    image: 'images/rtut.jpg',
    imageAlt: 'Doprovodný obrázek k nápovědě pro prvek rtuť',
    fallbackEmoji: '🌡️'
  },
  {
    name: 'hliník',
    symbol: 'Al',
    question: 'Jsem lehký kov. Na vzduchu se potáhnu vrstvičkou, která mě chrání. Najdeš mě v alobalu.',
    reaction: 'Lehká a správná odpověď!',
    emoji: '✈️',
    image: 'images/hlinik.jpg',
    imageAlt: 'Doprovodný obrázek k nápovědě pro prvek hliník',
    fallbackEmoji: '✈️'
  },
  {
    name: 'cín',
    symbol: 'Sn',
    question: 'V mrazu mě napadá „cínový mor“ a rozpadám se. Používají mě k pájení spojů v elektronice.',
    reaction: 'Správně! Tebe žádný mor nedostane!',
    emoji: '🧑‍🏭',
    image: 'images/cin.jpg',
    imageAlt: 'Doprovodný obrázek k nápovědě pro prvek cín',
    fallbackEmoji: '🧑‍🏭'
  },
  {
    name: 'olovo',
    symbol: 'Pb',
    question: 'Jsem šedý, velmi těžký a toxický kov. Chráním lidi před rentgenovým zářením.',
    reaction: 'Těžká váha! Správně.',
    emoji: '☢️',
    image: 'images/olovo.jpg',
    imageAlt: 'Doprovodný obrázek k nápovědě pro prvek olovo',
    fallbackEmoji: '☢️'
  },
  {
    name: 'uhlík',
    symbol: 'C',
    question: 'Můžu být měkká tuha v tužce nebo nejtvrdší diamant. Jsem základem všeho živého.',
    reaction: 'Jsi diamantový student!',
    emoji: '💎',
    image: 'images/uhlik.jpg',
    imageAlt: 'Doprovodný obrázek k nápovědě pro prvek uhlík',
    fallbackEmoji: '💎'
  },
  {
    name: 'dusík',
    symbol: 'N',
    question: 'Tvořím 78 % vzduchu, který dýcháš. V kapalném stavu zmrazím všechno na kost.',
    reaction: 'Mrazivě přesná odpověď!',
    emoji: '❄️',
    image: 'images/dusik.jpg',
    imageAlt: 'Doprovodný obrázek k nápovědě pro prvek dusík',
    fallbackEmoji: '❄️'
  },
  {
    name: 'kyslík',
    symbol: 'O',
    question: 'Jsem plyn, bez kterého by nic nehořelo. Jsem hlavním produktem fotosyntézy.',
    reaction: 'Správně! Bez tebe by se nám špatně dýchalo.',
    emoji: '🌿',
    image: 'images/kyslik.jpg',
    imageAlt: 'Doprovodný obrázek k nápovědě pro prvek kyslík',
    fallbackEmoji: '🌿'
  },
  {
    name: 'vodík',
    symbol: 'H',
    question: 'Jsem nejlehčí a nejhojnější prvek ve vesmíru. Když shořím, vznikne čistá voda.',
    reaction: 'Hvězdný zásah!',
    emoji: '⭐',
    image: 'images/vodik.jpg',
    imageAlt: 'Doprovodný obrázek k nápovědě pro prvek vodík',
    fallbackEmoji: '⭐'
  },
  {
    name: 'síra',
    symbol: 'S',
    question: 'Jsem žlutý nekov od sopek. Moje sloučeniny zapáchají jako zkažená vejce.',
    reaction: 'Správně! Sice to smrdí, ale odpověď je voňavá!',
    emoji: '🌋',
    image: 'images/sira.jpg',
    imageAlt: 'Doprovodný obrázek k nápovědě pro prvek síra',
    fallbackEmoji: '🌋'
  },
  {
    name: 'chlor',
    symbol: 'Cl',
    question: 'Jsem žlutozelený plyn z bazénu, ale v 1. světové válce jsem byl zneužit jako bojový plyn.',
    reaction: 'Přesně tak! Čistá práce!',
    emoji: '🏊',
    image: 'images/chlor.jpg',
    imageAlt: 'Doprovodný obrázek k nápovědě pro prvek chlor',
    fallbackEmoji: '🏊'
  },
  {
    name: 'jod',
    acceptedNames: ['jod', 'jód'],
    symbol: 'I',
    question: 'Jsem tmavě fialová látka, která se mění v plyn – sublimuje. Jsem důležitý pro štítnou žlázu.',
    reaction: 'Skvělá dedukce!',
    emoji: '🟣',
    image: 'images/jod.jpg',
    imageAlt: 'Doprovodný obrázek k nápovědě pro prvek jod',
    fallbackEmoji: '🟣'
  },
  {
    name: 'fosfor',
    symbol: 'P',
    question: 'Svítím ve tmě. Moje červená podoba je na krabičce od zápalek.',
    reaction: 'Zapálilo ti to správně!',
    emoji: '🔥',
    image: 'images/fosfor.jpg',
    imageAlt: 'Doprovodný obrázek k nápovědě pro prvek fosfor',
    fallbackEmoji: '🔥'
  },
  {
    name: 'fluor',
    symbol: 'F',
    question: 'Jsem nejreaktivnější prvek. Moje sloučeniny v pastě chrání tvoje zuby před kazem.',
    reaction: 'Zářivý úsměv, správná odpověď!',
    emoji: '😁',
    image: 'images/fluor.jpg',
    imageAlt: 'Doprovodný obrázek k nápovědě pro prvek fluor',
    fallbackEmoji: '😁'
  }
];

const screens = {
  start: document.querySelector('#start-screen'),
  quiz: document.querySelector('#quiz-screen'),
  result: document.querySelector('#result-screen')
};

const startButton = document.querySelector('#start-button');
const restartButton = document.querySelector('#restart-button');
const answerForm = document.querySelector('#answer-form');
const checkButton = document.querySelector('#check-button');
const nextButton = document.querySelector('#next-button');

const questionNumber = document.querySelector('#question-number');
const mistakeCount = document.querySelector('#mistake-count');
const progress = document.querySelector('#progress');
const progressBar = document.querySelector('#progress-bar');
const questionText = document.querySelector('#question-text');
const questionImage = document.querySelector('#question-image');
const imageFallback = document.querySelector('#image-fallback');
const fallbackEmoji = document.querySelector('#fallback-emoji');

const nameInput = document.querySelector('#element-name');
const symbolInput = document.querySelector('#element-symbol');
const nameFeedback = document.querySelector('#name-feedback');
const symbolFeedback = document.querySelector('#symbol-feedback');

const reactionBox = document.querySelector('#reaction-box');
const reactionText = document.querySelector('#reaction-text');

const resultEmoji = document.querySelector('#result-emoji');
const resultTitle = document.querySelector('#result-title');
const resultMessage = document.querySelector('#result-message');
const resultMistakes = document.querySelector('#result-mistakes');
const resultFirstTry = document.querySelector('#result-first-try');
const answerSummary = document.querySelector('#answer-summary');

let gameQuestions = [];
let currentIndex = 0;
let totalMistakes = 0;
let currentWrongAttempts = 0;
let results = [];
let questionSolved = false;

function showScreen(screenName) {
  Object.values(screens).forEach((screen) => {
    screen.classList.remove('screen--active');
  });

  screens[screenName].classList.add('screen--active');
}

function shuffle(items) {
  const copy = [...items];

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }

  return copy;
}

function normalizeName(value) {
  return value
    .trim()
    .toLocaleLowerCase('cs-CZ')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function getAcceptedNames(element) {
  const names = element.acceptedNames ?? [element.name];
  return names.map(normalizeName);
}

function setFieldState(input, feedback, state, message) {
  input.classList.remove('is-correct', 'is-wrong');
  feedback.classList.remove('is-correct', 'is-wrong');

  if (state) {
    input.classList.add(`is-${state}`);
    feedback.classList.add(`is-${state}`);
  }

  feedback.textContent = message;
}

function clearAnswerState() {
  nameInput.value = '';
  symbolInput.value = '';
  nameInput.disabled = false;
  symbolInput.disabled = false;
  setFieldState(nameInput, nameFeedback, null, '');
  setFieldState(symbolInput, symbolFeedback, null, '');
  reactionBox.hidden = true;
  nextButton.hidden = true;
  checkButton.hidden = false;
  questionSolved = false;
}

function startGame() {
  gameQuestions = shuffle(ELEMENTS).slice(0, QUESTIONS_PER_GAME);
  currentIndex = 0;
  totalMistakes = 0;
  currentWrongAttempts = 0;
  results = [];
  mistakeCount.textContent = '0';

  showScreen('quiz');
  renderQuestion();
}

function renderQuestion() {
  const current = gameQuestions[currentIndex];
  currentWrongAttempts = 0;
  clearAnswerState();

  questionNumber.textContent = String(currentIndex + 1);
  questionText.textContent = current.question;

  fallbackEmoji.textContent = current.fallbackEmoji;
  imageFallback.hidden = true;
  questionImage.hidden = false;
  questionImage.alt = current.imageAlt;
  questionImage.src = current.image;

  const progressValue = currentIndex + 1;
  progress.setAttribute('aria-valuenow', String(progressValue));
  progressBar.style.width = `${(progressValue / QUESTIONS_PER_GAME) * 100}%`;

  window.requestAnimationFrame(() => nameInput.focus());
}

function checkAnswer(event) {
  event.preventDefault();

  if (questionSolved) {
    return;
  }

  const current = gameQuestions[currentIndex];
  const enteredName = normalizeName(nameInput.value);
  const enteredSymbol = symbolInput.value.trim();

  const nameIsCorrect =
    enteredName.length > 0 &&
    getAcceptedNames(current).includes(enteredName);

  const symbolIsCorrect = enteredSymbol === current.symbol;

  setFieldState(
    nameInput,
    nameFeedback,
    nameIsCorrect ? 'correct' : 'wrong',
    nameIsCorrect ? 'Správný název ✓' : 'Název zatím nesedí. Zkus to znovu.'
  );

  setFieldState(
    symbolInput,
    symbolFeedback,
    symbolIsCorrect ? 'correct' : 'wrong',
    symbolIsCorrect
      ? 'Správná značka ✓'
      : 'Zkontroluj značku i správné použití velkého a malého písmene.'
  );

  if (!nameIsCorrect || !symbolIsCorrect) {
    totalMistakes += 1;
    currentWrongAttempts += 1;
    mistakeCount.textContent = String(totalMistakes);

    if (!nameIsCorrect) {
      nameInput.focus();
    } else {
      symbolInput.focus();
    }

    return;
  }

  questionSolved = true;
  nameInput.disabled = true;
  symbolInput.disabled = true;
  checkButton.hidden = true;
  nextButton.hidden = false;
  reactionText.textContent = current.reaction;
  reactionBox.hidden = false;

  results.push({
    name: current.name,
    symbol: current.symbol,
    wrongAttempts: currentWrongAttempts
  });

  nextButton.focus();
}

function goToNextQuestion() {
  if (!questionSolved) {
    return;
  }

  currentIndex += 1;

  if (currentIndex < QUESTIONS_PER_GAME) {
    renderQuestion();
    return;
  }

  showResults();
}

function getEvaluation(mistakes) {
  if (mistakes === 0) {
    return {
      emoji: '🏆',
      title: 'Dokonalá chemická reakce!',
      message: 'Všech pět prvků jsi určil/a správně hned napoprvé. Výborná práce!'
    };
  }

  if (mistakes <= 2) {
    return {
      emoji: '🌟',
      title: 'Skvělý výsledek!',
      message: 'Prvky poznáváš velmi dobře. Jen několik drobných oprav a vše zareagovalo správně.'
    };
  }

  if (mistakes <= 5) {
    return {
      emoji: '🧪',
      title: 'Dobrá chemická práce!',
      message: 'Úkol jsi úspěšně dokončil/a. Při další hře už budou značky určitě ještě jistější.'
    };
  }

  return {
    emoji: '🔬',
    title: 'Pátrání dokončeno!',
    message: 'Nevzdal/a ses a všechny prvky jsi nakonec správně odhalil/a. Procvičení dělá chemika!'
  };
}

function showResults() {
  const firstTryCount = results.filter(
    (result) => result.wrongAttempts === 0
  ).length;

  const evaluation = getEvaluation(totalMistakes);

  resultEmoji.textContent = evaluation.emoji;
  resultTitle.textContent = evaluation.title;
  resultMessage.textContent = evaluation.message;
  resultMistakes.textContent = String(totalMistakes);
  resultFirstTry.textContent = String(firstTryCount);

  answerSummary.replaceChildren();

  const heading = document.createElement('h3');
  heading.textContent = 'Prvky v této hře';
  answerSummary.appendChild(heading);

  const list = document.createElement('ul');
  list.className = 'summary__list';

  results.forEach((result) => {
    const item = document.createElement('li');
    item.className = 'summary__item';

    const elementName = document.createElement('span');
    elementName.className = 'summary__element';
    elementName.textContent =
      `${capitalize(result.name)} – ${result.symbol}`;

    const attempts = document.createElement('span');
    attempts.className = 'summary__attempts';
    attempts.textContent =
      result.wrongAttempts === 0
        ? 'správně napoprvé'
        : `chybné pokusy: ${result.wrongAttempts}`;

    item.append(elementName, attempts);
    list.appendChild(item);
  });

  answerSummary.appendChild(list);
  showScreen('result');
  restartButton.focus();
}

function capitalize(value) {
  return value.charAt(0).toLocaleUpperCase('cs-CZ') + value.slice(1);
}

function clearWrongStateOnInput(input, feedback) {
  if (input.classList.contains('is-wrong')) {
    setFieldState(input, feedback, null, '');
  }
}

questionImage.addEventListener('error', () => {
  questionImage.hidden = true;
  questionImage.removeAttribute('src');
  imageFallback.hidden = false;
});

questionImage.addEventListener('load', () => {
  questionImage.hidden = false;
  imageFallback.hidden = true;
});

startButton.addEventListener('click', startGame);
restartButton.addEventListener('click', startGame);
answerForm.addEventListener('submit', checkAnswer);
nextButton.addEventListener('click', goToNextQuestion);

nameInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    symbolInput.focus();
  }
});

nameInput.addEventListener('input', () => {
  clearWrongStateOnInput(nameInput, nameFeedback);
});

symbolInput.addEventListener('input', () => {
  clearWrongStateOnInput(symbolInput, symbolFeedback);
});
