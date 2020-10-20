const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
  const minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minDec.innerText = minutes[0];
  minUni.innerText = minutes[1]
}

function printSeconds() {
  const seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secDec.innerText = seconds[0];
  secUni.innerText = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  return chronometer.splitClick();
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  chronometer.stopClick();
  btnLeft.setAttribute('class', 'btn start');
  btnLeft.innerText = 'START';
  btnRight.setAttribute('class', 'btn split');
  btnRight.innerText = 'RESET';
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  chronometer.startClick();
  btnLeft.setAttribute('class', 'btn stop');
  btnLeft.innerText = 'STOP';
  btnRight.setAttribute('class', 'btn reset');
  btnRight.innerText = 'SPLIT';
  printTimeInt = setInterval(()=>printTime(),1000);
}

function setResetBtn() {
  chronometer.resetClick();
  clearSplits()
  printTime();
}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  btnLeft.classList.toggle("stop");
  btnRight.classList.toggle("start");

  btnRight.classList.toggle("split");
  btnRight.classList.toggle("reset");

  if (btnLeft.innerText === "STOP") {
    setStopBtn();
  } else {
    setStartBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if(btnRight.innerText === 'RESET'){
    setResetBtn()
  } else {
    setSplitBtn()
  }
});
