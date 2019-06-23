import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../models/Todo'; 

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})

export class TodolistComponent implements OnInit {
  todos:Todo[];
  
  constructor(private todoService:TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    })
  }

  deleteTodo(todo:Todo) {
    //remove from ui
    this.todos = this.todos.filter(t => t.id !== todo.id);
    //remove from the server
    this.todoService.deleteTodo(todo).subscribe();
  }

  addTodo(todo:Todo) {
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo);
    })
  }

}
