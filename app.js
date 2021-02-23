const todoInput = document.querySelector('.input-text')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')

todoButton.addEventListener('click', (e) => {
  e.preventDefault()

  //TODO DIV
  const todoDiv = document.createElement('div')
  todoDiv.classList.add('todo')

  //Create LI
  const newTodo = document.createElement('li')
  newTodo.innerText = todoInput.value
  newTodo.classList.add('todo-item')
  todoDiv.appendChild(newTodo)

  //Create Delete Button
  const deleteButton = document.createElement('button')
  deleteButton.innerHTML = '<i class="fas fa-trash"></i>'
  deleteButton.classList.add('delete-button')
  todoDiv.appendChild(deleteButton)

  //Create Checked Button
  const checkedButton = document.createElement('button')
  checkedButton.innerHTML = '<i class="fas fa-check"></i>'
  checkedButton.classList.add('checked-button')
  todoDiv.appendChild(checkedButton)

  //APPEND TO LIST
  todoList.appendChild(todoDiv)

  todoInput.value = ''
})

todoList.addEventListener('click', (e) => {
  const item = e.target

  if (item.classList[0] === 'delete-button') {
    const todo = item.parentElement
    todo.classList.add('fall')
    // removeLocalTodos(todo)
    todo.addEventListener('transitionend', () => {
      todo.remove()
    })
  }

  if (item.classList[0] === 'checked-button') {
    const todo = item.parentElement
    todo.classList.toggle('completed')
  }
})
