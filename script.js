document.addEventListener("DOMContentLoaded", () => {
  // Select DOM elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Function to add a new task
  function addTask() {
    const taskText = taskInput.value.trim(); // Get and trim the task input value

    // Check if input is not empty
    if (taskText === "") {
      alert("Please enter a task."); // Alert if empty
      return;
    }

    // Create a new list item
    const listItem = document.createElement("li");
    listItem.textContent = taskText;
    listItem.classList.add("task-item"); // Add class for styling

    // Create a remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "remove-btn";

    // Attach event to remove button
    removeButton.onclick = function () {
      listItem.classList.add("fade-out"); // Optional: add fade-out effect
      setTimeout(() => {
        taskList.removeChild(listItem); // Remove the task after fade-out
      }, 300); // Match with CSS transition duration
    };

    // Append the button to the list item
    listItem.appendChild(removeButton);
    taskList.appendChild(listItem); // Add the list item to the task list

    // Clear the input field
    taskInput.value = "";
  }

  // Attach event listeners
  addButton.addEventListener("click", addTask); // Add task on button click

  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask(); // Add task on Enter key press
    }
  });
});
