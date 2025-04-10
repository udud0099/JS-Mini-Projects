let todoList = [];
let inputBox = document.querySelector("input");
let text = document.querySelector(".addList");
let taskCom = document.querySelectorAll("p");

function addData() {
  // todoList.push(inputBox.value);

  if (inputBox.value == "") {
    alert("put value");
  } else {
    let newe = document.createElement("li");
    newe.innerHTML = "<p>" + inputBox.value + "<span>D</span></p>";
    text.appendChild(newe);
    inputBox.value = "";
    newe.querySelector("span").addEventListener("click", remove);
    function remove() {
      newe.remove();
    }
  }
  //   console.log(document.body.innerHTML);
}
