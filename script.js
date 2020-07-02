const taskInput = document.querySelector("#task-input");
const addButton = document.querySelector(".add-button");
const list = document.querySelector("ul");
const taskError = document.querySelector("#task-input + span.error");

let taskIndex = 1;

function addTask() {
  if (taskInput.value === "") {
    return;
  }

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

taskInput.addEventListener("keyup", (event) => {
  if (event.key !== "Enter") return;
  addButton.click();
  event.preventDefault();
});
