import { Component, OnInit } from '@angular/core';
import { Todo } from './shared/models/todo.model';
import { TodosService } from './shared/services/todos.service';
import { ConfirmService } from './shared/services/confirm-modal.service';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  todos: Todo[];
  newTodoName: string;
  newTodoLabel: string;
  newTodoDeadline: NgbDateStruct;
  isAdding: boolean = false;
  faCalendarAlt = faCalendarAlt;

  constructor(private todosService: TodosService, private confirmService: ConfirmService) {}

  ngOnInit() {
    this.todos = this.todosService.getTodos();
  }

  onAddTodo() {
    if (this.isAdding) {
      this.todosService.addTodo(this.newTodoName, this.newTodoLabel, this.newTodoDeadline, false);
      this.newTodoName = '';
    } else {
      this.newTodoLabel = `Task number ${this.todos.length + 1}`;
    }
    this.isAdding = !this.isAdding;
  }

  onRemoveLastTodo() {
    if (this.todos.length) {
      const lastTodo = this.todos[this.todos.length - 1];
      this.confirmService.confirm({title: 'Removing last todo', message: `Are you sure that you want to remove last todo: ${lastTodo.label} - ${lastTodo.name}?`}).then(
        () => {
          this.todosService.removeLastTodo();
          this.newTodoLabel = `Task number ${this.todos.length + 1}`;
        },
        () => {});
    }
  }

  onClearTodos() {
    if (this.todos.length) {
      this.confirmService.confirm({title: 'Removing all todos', message: `Are you sure that you want to remove all of the todos?`}).then(
        () => {
          this.todosService.clearTodos();
          this.todos = this.todosService.todos;
          this.newTodoLabel = `Task number ${this.todos.length + 1}`;
        },
        () => {});
    }
  }

  onSaveTodos() {
    if (this.todos.length) {
      this.confirmService.confirm({title: 'Saving todos', message: `Are you sure that you want to save todos?`}).then(
        () => {
          this.todosService.saveTodos();
        },
        () => {});
    }
  }
}
