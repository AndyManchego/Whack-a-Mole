const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
const buttons = document.querySelectorAll('button');
const startButton = document.querySelector('.start-button'); 


let lastHole;
let timeUp = false;
let score = 0;

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  const hole = holes[idx];
  if (hole === lastHole) {
    return randomHole(holes);
  }
  lastHole = hole;
  return hole;
}

function peep() {
  const time = randomTime(200, 1000);
  const hole = randomHole(holes);
  hole.firstElementChild.style.display = 'block';
  setTimeout(() => {
    hole.firstElementChild.style.display = 'none';
    if (!timeUp) {
      peep();
    }
  }, time);
}

function startGame() {
  score = 0;
  timeUp = false;
  peep();
  setTimeout(() => timeUp = true, 10000);
}

buttons.forEach(button => {
  button.addEventListener('click', e => {
    if (!e.isTrusted) return;
    score++;
    e.target.parentNode.firstElementChild.style.display = 'none';
  });
});


 

