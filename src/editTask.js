function editTask() {
        /* 
    essa função deve:
    criar novo container div
    dentro do container deve ter input para titulo, descrição, dueDate, priority
    esses inputs devem estar pre-preenchidos com as informações atuais da task
    por fim incluir um botão, que chama uma função que apaga o item sendo editado do array
    e coloca o item atual no lugar,
    a função apaga o div container,
    a função apaga todos os elementos do item na lista, e coloca novos elementos atualizados

    */

    const container = document.createElement("div");
    const titleLabel = document.createElement("label");
    const titleInput = document.createElement("input");
    const descriptionLabel = document.createElement("label");
    const descriptionInput = document.createElement("input");
    const priorityLabel = document.createElement("label");
    const prioritySelect = document.createElement("select");
    const optionLow = document.createElement("option");
    const optionMedium = document.createElement("option");
    const optionHigh = document.createElement("option");
    const dueDateLabel = document.createElement("label");
    const dueDateInput = document.createElement("input");

    titleLabel.textContent = "Task title";
    titleLabel.setAttribute("for", "title");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("name", "title");
    titleInput.value = task.title;

    descriptionLabel.textContent = "Task description";
    descriptionLabel.setAttribute("for", "description");
    descriptionInput.setAttribute("type", "text");
    descriptionInput.setAttribute("name", "description");
    descriptionInput.value = task.description;

    priorityLabel.textContent = "Priority";
    priorityLabel.setAttribute("for", "priority");
    prioritySelect.setAttribute("id", "priority");
    optionLow.setAttribute("value", "low");
    optionLow.textContent = "low";
    optionMedium.setAttribute("value", "medium");
    optionMedium.textContent = "medium";
    optionHigh.setAttribute("value", "high");
    optionHigh.textContent = "high";
    prioritySelect.value = task.priority;

    prioritySelect.appendChild(optionLow);
    prioritySelect.appendChild(optionMedium);
    prioritySelect.appendChild(optionHigh);

    dueDateLabel.textContent = "Due date:"
    dueDateLabel.setAttribute("for", "dueDate");
    dueDateInput.setAttribute("type", "text");
    dueDateInput.setAttribute("name", "dueDate");
    dueDateInput.value = task.dueDate;


}