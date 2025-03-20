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
let score = 0;
let win = 0;
let loss = 0;
let result = "";

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
  wrongAns();
  document.getElementById("opt1").style.order = a[0];
  document.getElementById("opt2").style.order = a[1];
  document.getElementById("opt3").style.order = a[2];
  document.getElementById("opt4").style.order = a[3];
}

function wrongAns() {
  let wrongAnsRandom = ans;
  console.log("ans " + ans);

  if (wrongAnsRandom < 5) {
    if (wrongAnsRandom > -5) {
      wrongAnsRandom = 7;
    }
  }
  if (selOpr !== 3) {
    var Wopt2 = Math.floor(Math.random() * wrongAnsRandom);
    var Wopt3 = Math.floor(Math.random() * wrongAnsRandom);
    var Wopt4 = Math.floor(Math.random() * wrongAnsRandom);
  } else {
    var Wopt2 = Math.floor(Math.random() * wrongAnsRandom + wrongAnsRandom);
    var Wopt3 = Math.floor(Math.random() * wrongAnsRandom + wrongAnsRandom / 4);
    var Wopt4 = Math.floor(Math.random() * wrongAnsRandom);
  }
  console.log("one " + ans, Wopt2, Wopt3, Wopt4);

  checkWrongAns(ans, Wopt2, Wopt3, Wopt4);
}
function checkWrongAns(ans, Wopt2, Wopt3, Wopt4) {
  console.log("two " + ans, Wopt2, Wopt3, Wopt4);

  if (
    ans === Wopt2 ||
    ans === Wopt3 ||
    ans === Wopt4 ||
    Wopt2 === Wopt3 ||
    Wopt2 === Wopt4 ||
    Wopt3 === Wopt4
  ) {
    wrongAns();
  } else {
    document.getElementById("opt1").innerHTML = ans;
    document.getElementById("opt2").innerHTML = Wopt2;
    document.getElementById("opt3").innerHTML = Wopt3;
    document.getElementById("opt4").innerHTML = Wopt4;
  }
}
function opt(n) {
  let aa1 = document.getElementById("opt1").innerHTML;
  let aa2 = document.getElementById("opt2").innerHTML;
  let aa3 = document.getElementById("opt3").innerHTML;
  let aa4 = document.getElementById("opt4").innerHTML;
  console.log("final ans", aa1, aa2, aa3, aa4, n);

  if (n == 1) {
    win++;

    result = "win";
    if (age == 1 && (selOpr == 1 || selOpr == 2)) {
      score += 5;
    } else if (
      (age == 1 && (selOpr == 4 || selOpr == 3)) ||
      (age == 2 && (selOpr == 1 || selOpr == 2))
    ) {
      score += 10;
    } else if (
      (age == 2 && (selOpr == 4 || selOpr == 3)) ||
      (age == 3 && (selOpr == 1 || selOpr == 2))
    ) {
      score += 20;
    } else if (
      (age == 3 && (selOpr == 4 || selOpr == 3)) ||
      (age == 4 && (selOpr == 1 || selOpr == 2))
    ) {
      score += 40;
    } else {
      score += 60;
    }
  } else {
    loss--;
    if (age == 1 && (selOpr == 1 || selOpr == 2)) {
      score -= 5;
    } else if (
      (age == 1 && (selOpr == 4 || selOpr == 3)) ||
      (age == 2 && (selOpr == 1 || selOpr == 2))
    ) {
      score -= 10;
    } else if (
      (age == 2 && (selOpr == 4 || selOpr == 3)) ||
      (age == 3 && (selOpr == 1 || selOpr == 2))
    ) {
      score -= 20;
    } else if (
      (age == 3 && (selOpr == 4 || selOpr == 3)) ||
      (age == 4 && (selOpr == 1 || selOpr == 2))
    ) {
      score -= 40;
    } else {
      score -= 60;
    }
    result = "loss";
  }
  document.getElementById("win").innerHTML = "total Win = " + win;
  document.getElementById("loss").innerHTML = "total Loss = " + loss;
  document.getElementById("score").innerHTML = "total Score = " + score;
  document.getElementById("last").innerHTML = "Last Time Result is  " + result;
  setQue();
}
setQue();
