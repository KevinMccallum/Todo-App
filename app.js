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

  //ADD TODO TO LOCAL STORAGE
  saveLocalTodos(todoInput.value)

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

filterOption.addEventListener('click', (e) => {
  const todos = todoList.childNodes
  todos.forEach((todo) => {
    switch (e.target.value) {
      case 'all':
        todo.style.display = 'flex'
        break
      case 'completed':
        if (todo.classList.contains('completed')) {
          todo.style.display = 'flex'
        } else {
          todo.style.display = 'none'
        }
        break
      case 'uncompleted':
        if (!todo.classList.contains('completed')) {
          todo.style.display = 'flex'
        } else {
          todo.style.display = 'none'
        }
        break
    }
  })
})

const saveLocalTodos = (todo) => {
  //Check if anything exists in local storage
  let todos
  if (localStorage.getItem('todos') === null) {
    todos = []
  } else {
    todos = JSON.parse(localStorage.getItem('todos'))
  }
  //Save Todo to local storage
  todos.push(todo)
  localStorage.setItem('todos', JSON.stringify(todos))
}
