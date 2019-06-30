import { Component, Input } from '@angular/core';
import { Todo } from '../../shared/models/todo.model';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input() todo: Todo;
  @Input() todos: Todo[];
  faCalendarAlt = faCalendarAlt;
}
