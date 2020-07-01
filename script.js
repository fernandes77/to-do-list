let taskInput = document.querySelector("#task-input");
let addButton = document.querySelector(".add-button");
let list = document.querySelector("ul");

function addTask() {
  let taskText = taskInput.value;
  taskInput.value = "";

  let task = document.createElement("li");
  let taskSpan = document.createElement("span");
  let removeButton = document.createElement("button");

  task.appendChild(taskSpan);
  task.appendChild(removeButton);

  taskSpan.textContent = taskText;
  removeButton.textContent = "X";
  removeButton.className = "close-button";

  list.appendChild(task);
  removeButton.addEventListener("click", function () {
    task.remove();
  });

  taskInput.focus();
}

addButton.addEventListener("click", addTask);

taskInput.addEventListener("keyup", event => {
  if (event.key !== "Enter") return;
  addButton.click();
  event.preventDefault();
});
