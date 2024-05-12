document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.querySelector('.add__btn-click');
    const todoLists = document.querySelector('.todo__lists');
    const inputValue = document.querySelector('.create__todo-input');

    addButton.addEventListener('click', function() {
        const newTodoItem = document.createElement('div');
        newTodoItem.classList.add('form_radio_lists');
        newTodoItem.innerHTML = `
            <div class="labels">
                <input id="radio" type="radio" name="radio" onMouseDown="this.isChecked=this.checked;" 
                onClick="this.checked=!this.isChecked;">
                <label class="labels_line" for="radio">${inputValue.value}</label>
            </div>
            <div class="form-radio-btn">
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </div>
        `;

        todoLists.appendChild(newTodoItem);

        const editButton = newTodoItem.querySelector('.edit-btn');
        const deleteButton = newTodoItem.querySelector('.delete-btn');
        const radio = newTodoItem.querySelector('input[type="radio"]');
        const label = newTodoItem.querySelector('.labels_line');

        editButton.addEventListener('click', function() {
            const parent = this.closest('.form_radio_lists');            
            const label = parent.querySelector('.labels_line');

            const input = document.createElement('input');
            input.setAttribute('type', 'text');
            input.classList.add('input_modify');
            input.value = label.textContent;

            label.parentNode.replaceChild(input, label);
        });

        deleteButton.addEventListener('click', function() {
            newTodoItem.remove();
        });

        radio.addEventListener('click', function() {
            if (this.checked) {
                label.style.color = 'grey'; 
                label.style.textDecoration = 'line-through'; 
            } else {
                label.style.color = ''; 
                label.style.textDecoration = ''; 
            }
        });

      
    });
});
