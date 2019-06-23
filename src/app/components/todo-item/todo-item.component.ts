import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  
  constructor(private todoService:TodoService) { }

  ngOnInit() {
  }

  setClasses() {
    let classes = {
      todo: true,
      'is-completed': this.todo.completed
    }

    return classes;
  }
  onToggle(todo) {
    todo.completed = !todo.completed;    
    this.todoService.toggleCompleted(todo).subscribe(todo => console.log(todo));
  }
  onDelete(todo) {
    console.log('delete');
    this.deleteTodo.emit(todo);    
  }
}
