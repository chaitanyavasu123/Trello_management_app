function openForm() {
    document.getElementById("taskForm").style.display = "block";
}

function closeForm() {
    document.getElementById("taskForm").style.display = "none";
}

let taskIdCounter = 0;

function addTask() {
    const taskTitle = document.getElementById("taskTitle").value;
    const errorMessage = document.getElementById('error-message');
    if (!taskTitle.trim()) {
        errorMessage.style.display = 'block';
      } else {
        errorMessage.style.display = 'none';
        console.log('Task added:', taskTitle);
      }
    if (taskTitle) {
        taskIdCounter++;
        const task = document.createElement("div");
        task.className = "task";
        task.draggable = true;
        task.id = "task-" + taskIdCounter;
        task.innerHTML = taskTitle;
        task.ondragstart = dragStart;
        document.getElementById("todo").querySelector(".task-list").appendChild(task);
        document.getElementById("taskTitle").value = "";
        closeForm();
    }
}


function allowDrop(event) {
    event.preventDefault();
}

function dragStart(event) {
    event.dataTransfer.setData("text", event.target.id);
    event.dataTransfer.effectAllowed = "move";
}

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const task = document.getElementById(data);
    event.target.appendChild(task);
}

document.querySelectorAll('.task-list').forEach(list => {
    list.addEventListener('dragover', allowDrop);
    list.addEventListener('drop', drop);
});

