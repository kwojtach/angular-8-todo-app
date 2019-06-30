import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo/todo.component';
import { TodosService } from './shared/services/todos.service';
import { FormsModule } from '@angular/forms';
import { ConfirmService, ConfirmState, ConfirmModalComponent, ConfirmTemplateDirective } from './shared/services/confirm-modal.service';
import { DataService } from "./shared/services/data.service";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    ConfirmModalComponent,
    ConfirmTemplateDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [TodosService, DataService, ConfirmService, ConfirmState],
  bootstrap: [AppComponent]
})
export class AppModule { }
