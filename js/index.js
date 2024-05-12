document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.querySelector('.add__btn-click');
    const todoLists = document.querySelector('.todo__lists');
    const inputValue = document.querySelector('.create__todo-input');
    let df = "radio-1";

    const myRadio = document.getElementById('radio-1');
    myRadio.addEventListener('click', function() {
        df = "radio-1"; 
        if (this.checked) {
            this.style.appearance = 'auto'; 
            this.style.boxShadow = 'none'; 
        } else {
            this.style.appearance = 'none'; 
            this.style.boxShadow = '2px 2px 4px rgba(0, 0, 0, 0.4)'; 
        }
    });

    const myRadioSecond = document.getElementById('radio-2');
    myRadioSecond.addEventListener('click', function() {
        df = "radio-2";
        if (this.checked) {
            this.style.appearance = 'auto'; 
            this.style.boxShadow = 'none'; 
        } else {
            this.style.appearance = 'none'; 
            this.style.boxShadow = '2px 2px 4px rgba(0, 0, 0, 0.4)'; 
        } 
    });

    addButton.addEventListener('click', function() {
        const newTodoItem = document.createElement('div');
        newTodoItem.classList.add('form_radio_lists');
        newTodoItem.innerHTML = `
            <div class="labels">
                <input id="${df}" type="radio" name="radio" onMouseDown="this.isChecked=this.checked;" 
                onClick="this.checked=!this.isChecked;">
                <label class="labels_line" for="${df}">${inputValue.value}</label>
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
            const labelText = label.textContent;
        
            const input = document.createElement('input');
            input.setAttribute('type', 'text');
            input.classList.add('input_modify');
            input.value = labelText;
        
            label.textContent = '';
            label.appendChild(input);
        
            input.focus();
        
            input.addEventListener('blur', function() {
                label.textContent = input.value;
            });
        });
        

        deleteButton.addEventListener('click', function() {
            newTodoItem.remove();
        });

        radio.addEventListener('click', function() {
            if (this.checked) {
                label.style.color = 'grey'; 
                label.style.textDecoration = 'line-through';
                this.style.appearance = 'auto'; 
                this.style.boxShadow = 'none';  
            } else {
                label.style.color = ''; 
                label.style.textDecoration = ''; 
            }
        });
    });
});
