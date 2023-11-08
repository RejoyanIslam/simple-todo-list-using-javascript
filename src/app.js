const addTask = document.getElementById("add-task");
const clearAllTask = document.getElementById("clear-all-task");
const filterTask = document.getElementById("filter-task");

addTask.addEventListener("submit", handleSubmit);
clearAllTask.addEventListener("click", clearTasks);
filterTask.addEventListener("keyup", filterTaskByKeyword);

// handle add task
function handleSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const data = new FormData(form);
  const { task } = Object.fromEntries(data);

  if (!task) return alert("Please enter a task");

  const newTask = document.createElement("li");
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.classList.add(
    "delete-btn",
    "bg-red-500",
    "text-white",
    "py-1",
    "px-2",
    "rounded-md",
    "ml-2"
  );

  deleteBtn.addEventListener("click", deleteTask);

  newTask.textContent = task;
  newTask.appendChild(deleteBtn);

  newTask.classList.add("task", "list-inside", "list-decimal");
  const list = document.querySelector(".task-list");
  clearAllTask.classList.remove("hidden");
  list.appendChild(newTask);
  form.reset();
}

// clear all task
function clearTasks(e) {
  e.preventDefault();
  const list = document.querySelector(".task-list");
  list.innerHTML = "";
  clearAllTask.classList.add("hidden");
}

// delete task
function deleteTask(e) {
  e.preventDefault();
  const list = document.querySelector(".task-list");
  list.removeChild(e.target.parentElement);
}

// filter task by keyword
function filterTaskByKeyword(e) {
  e.preventDefault();
  const keyword = e.target.value.toLowerCase();
  const tasks = document.querySelectorAll(".task");
  tasks.forEach((task) => {
    const text = task.textContent.toLowerCase();
    if (text.includes(keyword)) {
      task.classList.remove("hidden");
    } else {
      task.classList.add("hidden");
    }
  });
}
