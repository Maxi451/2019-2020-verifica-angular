import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = {
    todos: []
  };

  addTodo(todo) {
    this.data.todos.push({
      title: todo,
      completed: false
    });
}
}
