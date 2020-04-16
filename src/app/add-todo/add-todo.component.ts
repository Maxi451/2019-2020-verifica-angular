import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  @Output() addTodoChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  addTodo(todo) {
    this.addTodoChange.next(todo);
  }
}
