document.addEventListener("DOMContentLoaded", () => {
  // Select DOM elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Load tasks from Local Storage
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks.forEach((taskText) => addTask(taskText, false)); // Load tasks without saving again
  }

  // Function to add a new task
  function addTask(taskText, save = true) {
    if (save && taskText.trim() === "") return; // Prevent adding empty tasks

    // Create a new list item
    const listItem = document.createElement("li");
    listItem.textContent = taskText;
    listItem.classList.add("task-item");

    // Create a remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "remove-btn";

    // Attach event to remove button
    removeButton.onclick = function () {
      listItem.classList.add("fade-out"); // Optional fade-out effect
      setTimeout(() => {
        taskList.removeChild(listItem); // Remove the task after fade-out
        removeTaskFromLocalStorage(taskText); // Remove from Local Storage
      }, 300); // Match with CSS transition duration
    };

    // Append the button to the list item
    listItem.appendChild(removeButton);
    taskList.appendChild(listItem); // Add the list item to the task list

    // Save task to Local Storage if applicable
    if (save) {
      const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
      storedTasks.push(taskText);
      localStorage.setItem("tasks", JSON.stringify(storedTasks));
    }

    // Clear the input field
    taskInput.value = "";
  }

  // Function to remove a task from Local Storage
  function removeTaskFromLocalStorage(taskText) {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    const updatedTasks = storedTasks.filter((task) => task !== taskText);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }

  // Attach event listeners
  addButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    addTask(taskText); // Add task on button click
  });

  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      const taskText = taskInput.value.trim();
      addTask(taskText); // Add task on Enter key press
    }
  });

  loadTasks(); // Load tasks on page load
});
