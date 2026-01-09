const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const pendingTasks = document.getElementById("pendingTasks");
const completedTasks = document.getElementById("completedTasks");

addTaskBtn.addEventListener("click", addTask);

function addTask() {
    const text = taskInput.value.trim();
    if (text === "") return;

    const task = createTask(text);
    pendingTasks.appendChild(task);
    taskInput.value = "";
}

function createTask(text) {
    const li = document.createElement("li");

    const taskText = document.createElement("div");
    taskText.className = "task-text";
    taskText.innerText = text;

    const time = document.createElement("div");
    time.className = "task-time";
    time.innerText = "Added: " + new Date().toLocaleString();

    const buttons = document.createElement("div");
    buttons.className = "task-buttons";

    const completeBtn = document.createElement("button");
    completeBtn.innerText = "Complete";
    completeBtn.className = "complete";

    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "delete";

    buttons.append(completeBtn, editBtn, deleteBtn);
    li.append(taskText, time, buttons);

    completeBtn.onclick = () => completeTask(li, text);
    editBtn.onclick = () => {
        const newText = prompt("Edit task:", taskText.innerText);
        if (newText) taskText.innerText = newText;
    };
    deleteBtn.onclick = () => li.remove();

    return li;
}

function completeTask(task, text) {
    task.remove();
    const completed = createTask(text);
    completed.querySelector(".task-time").innerText =
        "Completed: " + new Date().toLocaleString();
    completedTasks.appendChild(completed);
}
