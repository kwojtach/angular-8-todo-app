import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';
import { DataService } from './data.service';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class TodosService {
  todos: Todo[] = [];

  constructor(private dataService: DataService) {}

  getTodos() {
    const todos = this.dataService.getData();
    if (todos) {
      this.todos = todos;
    }
    return this.todos;
  }

  saveTodos() {
    this.dataService.saveData(this.todos);
  }

  addTodo(name: string, label: string, deadline: NgbDateStruct, isCompleted: boolean) {
    this.todos.push({name, label, deadline, isCompleted});
    this.dataService.saveData(this.todos);
  }

  removeLastTodo() {
    this.todos.pop();
    this.dataService.saveData(this.todos);
  }

  clearTodos() {
    this.todos = [];
    this.dataService.saveData(this.todos);
  }
}
