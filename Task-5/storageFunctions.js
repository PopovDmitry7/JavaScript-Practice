export function addTaskToSession(task) {
    sessionStorage.setItem(task);
}

export function addMultipleTasksToLocal(task) {
    let tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
    tasks.push(
        {
            [task]: 'No Description',
        }
    );

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function editTaskInLocalStorage(taskId, newValue) {
    let tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];

    if (tasks.length === 0)
        throw new Error("No tasks found.");

    if (taskId > tasks.length)
        throw new Error("Non-existing ID.");

    const keyToChange = Object.keys(tasks[taskId -1]).filter(k => k !== 'id');
    if (keyToChange.length === 0)
        throw new Error('No property to update');

    tasks[taskId-1][[keyToChange[0]]] = newValue;

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function removeTaskFromLocalStorage(taskId){
    let tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];

    if (tasks.length === 0)
        throw new Error("No tasks found.");

    if (taskId > tasks.length)
        throw new Error("Non-existing ID.");

    tasks.splice(taskId-1, 1);

    localStorage.setItem('tasks', JSON.stringify(tasks));
    
}