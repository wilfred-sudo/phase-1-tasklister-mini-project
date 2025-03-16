document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("create-task-form");
    const input = document.getElementById("new-task-description");
    const taskList = document.getElementById("tasks");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const taskText = input.value.trim();
        if (taskText === "") return;

        const newTask = document.createElement("li");
        newTask.textContent = taskText;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "🗑️ Delete";
        deleteBtn.style.marginLeft = "10px";

        deleteBtn.addEventListener("click", () => {
            newTask.remove();
        });

        newTask.appendChild(deleteBtn);
        taskList.appendChild(newTask);

        input.value = "";
    });
});
