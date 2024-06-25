const todoist =JSON.parse(localStorage.getItem('todo')) || [];


renderTodoList();

document.querySelector('.add-button').addEventListener('click',()=>{
  addTodo();
})

function renderTodoList(){
  let todoistHTML = '';
  for(let i=0 ; i < todoist.length ; i++){
    const todoObject = todoist[i];
    const {name , dueDate} = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-button">Delete</button> 
    `;
    todoistHTML += html;
  }
  localStorage.setItem('todo',JSON.stringify(todoist));
  
  document.querySelector('.js-todo').innerHTML = todoistHTML;

  document.querySelectorAll('.delete-button')
  .forEach((deletebutton,index) => {
    deletebutton.addEventListener('click', ()=>{
      todoist.splice(index, 1);
      renderTodoList();
      // Whenever we update the todo list, save in localStorage.
      // saveToStorage();
    })
  });
}

function addTodo(){
  const inputElement = document.querySelector('.js-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date');
  const dueDate = dateInputElement.value;

  todoist.push({
    name,//or name: name,
    dueDate //or dueDate: dueDate
  });

  inputElement.value = '';
  renderTodoList();

  // Whenever we update the todo list, save in localStorage.
  // saveToStorage();
}
function saveToStorage(){
  localStorage.setItem('todo',JSON.stringify(todoist));
}