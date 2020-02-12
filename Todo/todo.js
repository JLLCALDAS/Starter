var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');
var listElement = document.querySelector('#todos ul');

var todos = JSON.parse(localStorage.getItem('listTodos')) || [];

/*var todos = [
   'Fazer Café',
   'Estudar Javascript',
   'Acessar Comunidade Rocketseat'
];*/

function renderTodos() {
    listElement.innerHTML = '';
    for (todo of todos) {
        var todoElement = document.createElement('li');        
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('img');

        linkElement.setAttribute('src', 'img/delete.png');

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deltodo(' + pos + ')');

        var linkText = document.createTextNode('Excluir');

        linkElement.appendChild(linkText);        

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement)
        listElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodo() {
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
    saveToStorage();    
}

buttonElement.onclick = addTodo;

function deltodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('listTodos', JSON.stringify(todos));
}