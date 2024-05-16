const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const taskText = input.value.trim();
    if (taskText !== '') {
        const taskElement = document.createElement('li');
        taskElement.innerHTML = `<span>${taskText}</span><button>Delete</button>`;
        list.appendChild(taskElement);
        input.value = '';
        taskElement.querySelector('button').addEventListener('click', function() {
            taskElement.remove();
        });
    }
});
