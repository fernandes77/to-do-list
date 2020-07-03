const taskInput = document.querySelector("#task-input");
const addButton = document.querySelector(".add-button");
const list = document.querySelector("ul");

taskInput.focus();

function addTask() {
  if (taskInput.value === "") {
    return;
  }

  taskInput.focus();

  let taskText = taskInput.value;
  taskInput.value = "";

  let task = document.createElement("li");
  let check = document.createElement("input");
  let checkSpan = document.createElement("span");
  let taskSpan = document.createElement("span");
  let removeButton = document.createElement("button");

  task.appendChild(check);
  task.appendChild(checkSpan);
  task.appendChild(taskSpan);
  task.appendChild(removeButton);

  check.type = "checkbox";
  checkSpan.className = "checkmark";
  taskSpan.textContent = taskText;
  removeButton.textContent = "X";
  removeButton.className = "close-button";

  list.appendChild(task);

  check.addEventListener("click", function() {
    if (this.checked) {
      taskSpan.className = "checked-task";
    }
    else {
      taskSpan.className = "";
    }
  });

  removeButton.addEventListener("click", function () {
    task.remove();
  });
}

addButton.addEventListener("click", addTask);

taskInput.addEventListener("keyup", (event) => {
  if (event.key !== "Enter") return;
  addButton.click();
  event.preventDefault();
});
