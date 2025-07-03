 function addTask() {
            const input = document.getElementById('todoInput');
            const taskText = input.value.trim();

            if (taskText === "") {
                alert("Please enter a task.");
                return;
            }

            const ul = document.getElementById('todoList');
            const li = document.createElement('li');

            const textSpan = document.createElement('span');
            textSpan.textContent = taskText;

            const removeButton = document.createElement('button');
            removeButton.textContent = "Remove";
            removeButton.classList.add('remove-btn');
            removeButton.onclick = function() {
                ul.removeChild(li);
            };

            li.appendChild(textSpan);
            li.appendChild(removeButton);
            ul.appendChild(li);

            input.value = ""; // clear input after adding
        }