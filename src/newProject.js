const newProject = function (title) {
    let tasks = [];

    function newTask(title, description, dueDate, priority) {
        let isDone = false;
        tasks.push({title, description, dueDate, priority, isDone});
    }
    
    function removeTask(index) {
        tasks.splice(index, 1);
    }

    return {title, tasks, newTask, removeTask}
}

export {newProject};