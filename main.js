document.getElementById("add-task").addEventListener("click", function () {
  const taskText = document.getElementById("new-task").value;
  if (taskText) {
    addTask(taskText);
    document.getElementById("new-task").value = "";
  }
});

function addTask(taskText) {
  const li = document.createElement("li");
  li.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "DELETE";
  deleteBtn.className = "btn btn-delete";
  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  const editBtn = document.createElement("button");
  editBtn.textContent = "EDIT";
  editBtn.className = "btn btn-edit";
  editBtn.addEventListener("click", function () {
    const newText = prompt("Edit your task:", taskText);
    if (newText) {
      li.firstChild.textContent = newText;
    }
  });

  li.appendChild(deleteBtn);
  li.appendChild(editBtn);
  document.getElementById("todo-list").appendChild(li);
}
