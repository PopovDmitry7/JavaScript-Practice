import * as storageFunctions from "./storageFunctions.js";

let taskListElement = document.getElementById('taskList');
let taskCount = document.getElementById('taskCount');

function renderTasks() {
    taskListElement.innerHTML = '';
    let taskList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];

    const frag = document.createDocumentFragment();
    if (taskList.length > 0)
        taskList.forEach((element, index) => {
            let li = document.createElement('li');

            Object.keys(element).forEach(key => {
                li.textContent += `${key} - ${element[key]}\n`;
            });

            li.style.whiteSpace = 'pre-wrap';

            frag.appendChild(li);
        });

    taskListElement.appendChild(frag);
    taskCount.textContent = 'Tasks in this session: ' + taskList.length;
}

renderTasks();

let addTaskBtn = document.getElementById('addTaskBtn');

addTaskBtn.addEventListener("click", (event) => {
    let taskNameInput = document.getElementById('taskInput');

    if (taskNameInput.value === undefined || !taskNameInput.value) {
        window.alert("Invalid task value!");
        return;
    }

    storageFunctions.addMultipleTasksToLocal(taskNameInput.value.toString());

    console.log(taskNameInput.value.toString());

    renderTasks();

    taskNameInput.value = '';
    taskNameInput.focus();
});

let clearAllBtn = document.getElementById('clearAllBtn');

clearAllBtn.addEventListener("click", (event) => {
    localStorage.removeItem('tasks');
    taskListElement.innerHTML = '';
    taskCount.textContent = 'Tasks in this session: 0';
});

let updateTaskBtn = document.getElementById('updateTaskBtn');
let taskIdInput = document.getElementById('taskId');

updateTaskBtn.addEventListener("click", (event) => {
    const taskId = Number(taskIdInput.value);

    if (Number.isNaN(taskId) || taskId <= 0) {
        window.alert("Enter a valid value for task ID!");
        return;
    }

    let taskDescriptionInput = document.getElementById('taskDescriptionInput');
    if (taskDescriptionInput.value === undefined || !taskDescriptionInput.value) {
        window.alert("Invalid task description value!");
        return;
    }

    try{
        storageFunctions.editTaskInLocalStorage(taskId, taskDescriptionInput.value);
        renderTasks();
    }
    catch(err){
        window.alert(err);
    }
    

});

let deleteTaskBtn = document.getElementById('deleteTaskBtn');

deleteTaskBtn.addEventListener("click", (event) => {
    const taskId = Number(taskIdInput.value);

    if (Number.isNaN(taskId) || taskId <= 0) {
        window.alert("Enter a valid value for task ID!");
        return;
    }

    try{
        storageFunctions.removeTaskFromLocalStorage(taskId);
        renderTasks();
    }
    catch(err){
        window.alert(err);
    }
    
});