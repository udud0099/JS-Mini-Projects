let agelist = document.getElementById("age");
let age = 1;
let selOpr = 1;
let firVal = 0;
let secVal = 0;
let opt1 = 1;
let opt2 = 2;
let opt3 = 3;
let opt4 = 4;
let oprHtml = " + ";
let ans = 0;

function selectoprator(sel) {
  selOpr = sel;
  setQue();
}
agelist.addEventListener("change", () => {
  age = agelist.value;
  setQue();
});

function setQue() {
  firVal = Math.floor(Math.random() * (9 + age ** age) + 1);
  secVal = Math.floor(Math.random() * (9 + age ** age) + 1);
  check();
}
function check() {
  if (selOpr === 4) {
    if (firVal % secVal == 0 && firVal > secVal && secVal !== 1) {
    } else {
      setQue();
    }
  }
  opration();
}
function opration() {
  if (selOpr == 1) {
    ans = firVal + secVal;
    oprHtml = " + ";
  }
  if (selOpr == 2) {
    ans = firVal - secVal;
    oprHtml = " - ";
  }
  if (selOpr == 3) {
    ans = firVal * secVal;
    oprHtml = " X ";
  }
  if (selOpr == 4) {
    ans = firVal / secVal;
    oprHtml = " / ";
  }
  finalShowHtml();
}
function finalShowHtml() {
  document.getElementById("que").innerHTML = firVal + oprHtml + secVal;
  document.getElementById("opt1").innerHTML = ans;
  orderOfAns();
}
function orderOfAns() {
  let a = [];
  while (a.length < 4) {
    let aRan = Math.floor(Math.random() * 4);
    if (!a.includes(aRan)) {
      a.push(aRan);
    }
  }
  document.getElementById("opt1").style.order = a[0];
  document.getElementById("opt2").style.order = a[1];
  document.getElementById("opt3").style.order = a[2];
  document.getElementById("opt4").style.order = a[3];
  wrongAns();
}

function wrongAns() {
  let wrongAnsRandom = ans;
  console.log("ans" + ans);

  if (wrongAnsRandom < 5) {
    if (wrongAnsRandom > -5) {
      wrongAnsRandom = 6;
    }
  }
  let Wopt2 = Math.floor(Math.random() * wrongAnsRandom);
  let Wopt3 = Math.floor(Math.random() * wrongAnsRandom);
  let Wopt4 = Math.floor(Math.random() * wrongAnsRandom);
  console.log("one " + ans, Wopt2, Wopt3, Wopt4);

  checkWrongAns(Wopt2, Wopt3, Wopt4);
}
function checkWrongAns(Wopt2, Wopt3, Wopt4) {
  console.log("two " + ans, Wopt2, Wopt3, Wopt4);

  if (Wopt2 == Wopt3 || Wopt2 == Wopt4 || Wopt3 == Wopt4) {
    wrongAns();
  } else {
    document.getElementById("opt2").innerHTML = Wopt2;
    document.getElementById("opt3").innerHTML = Wopt3;
    document.getElementById("opt4").innerHTML = Wopt4;
  }
}
setQue();
