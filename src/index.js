import './style.css';

function addTask() {
    const newTask = document.getElementById('new-task');
    const tasks = document.getElementById('tasks');
    const task = document.createElement('div');
    task.classList.add('task');
    task.innerHTML = `
        <input type="checkbox" class="task-checkbox">
        <div class="task-title">${newTask.value}</div>
        <button class="task-remove">Remove</button>
        <button class="task-edit">Edit</button>
        <div class="task-date">Due Date</div>
    `;
    tasks.appendChild(task);
    newTask.value = '';
}

document.getElementById('add').addEventListener('click', addTask);

document.getElementById('tasks').addEventListener('click', (e) => {
    if (e.target.classList.contains('task-remove')) {
        e.target.parentElement.remove();
    }
    if (e.target.classList.contains('task-edit')) {
        const taskTitle = e.target.parentElement.querySelector('.task-title');
        const newTitle = prompt('Edit Task', taskTitle.textContent);
        taskTitle.textContent = newTitle;
    }
    if (e.target.classList.contains('task-checkbox')) {
        e.target.parentElement.classList.toggle('task-completed');
    }
})