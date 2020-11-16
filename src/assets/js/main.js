const todos = [
  {id;1, content= "Tâche 1" completed:false},
  {id;2, content= "Tâche 2" completed:false}
];
 class Todo {
   constructor (id, content) {
     this.id = id;
     this.content = content;
     this.completed = todo.commpleted;
   }
 }



class TodoList {
  constructor (data) {
    this.el = document.querySelector(data.el);
    this.todos = [];
    this.loadTodos(data.todos);
    console.table(this.todos);
  }
  loadTodos (){
    for (let todo of todos) {
      this.todos.push(new Todo(todo))

    }

  }
}

new TodoList({
  el: '#app',
  todos
});
