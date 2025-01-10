const newProject = function (title) {
    let tasks = [];

    function getTasks(index) {
        if (index === undefined) {
            console.log(tasks)
        } else{
            console.log(tasks[index]);
        }
    }

    function newTask(title, description, dueDate, priority) {
        let isDone = false;
        tasks.push({title, description, dueDate, priority, isDone});
    }
    
    function removeTask(index) {
        tasks.splice(index, 1);
    }

    return {title, getTasks, newTask, removeTask}
}

export {newProject};