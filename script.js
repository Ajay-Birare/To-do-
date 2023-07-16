const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("listContainer");
/*

-----for Adding the task in the list 
____________________________________________________
->  if the input box is empty then enter something there
->  if We enter any task in the input box then ,
->  create list element and
->  append it in the list container i.e in UL tag
->  and make input box empty again


*/
function addTask() {
  if (inputBox.value === "") {
    alert("Please write something ");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}
/*

-----functions /Features
___________________________________________________
->When we click on the list element or Task
->its showing the task is Completed

->If we want to delete it we click on the Cross sign
->when we click on Cross sign then it will delete there parent Element i.e the List/task


*/

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showList() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showList();

// conainter > todo app -> row
// dark mode

function change() {
  let conainter = document.querySelector(".container");
  let todo = document.querySelector(".todo-app");
  let input = document.querySelector("#input-box");
  let dark = document.querySelector(".darkmode");

  conainter.classList.toggle("color");
  todo.classList.toggle("todoApp");
  input.classList.toggle("input");
  dark.classList.toggle("darkmodeImg");
}
