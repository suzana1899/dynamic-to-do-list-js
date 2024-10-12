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

    // Create a remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "remove-btn";

    // Attach event to remove button
    removeButton.onclick = function () {
      taskList.removeChild(listItem); // Remove the task when button is clicked
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
