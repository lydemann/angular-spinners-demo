import { appRouterModule } from '@app/app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from '@app/app.component';
import { NavbarComponent } from '@app/navbar/navbar.component';
import { TodoListComponent } from '@app/todo-list/todo-list.component';
import { TodoItemComponent } from '@app/todo-item/todo-item.component';
import { FooterComponent } from '@app/footer/footer.component';
import { AddTodoComponent } from '@app/add-todo/add-todo.component';
import { CoreModule } from '@app/core/core.module';
import { TodoListCompletedComponent } from '@app/todo-list-completed/todo-list-completed.component';
import { SharedModule } from '@app/shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TodoListComponent,
    TodoItemComponent,
    FooterComponent,
    AddTodoComponent,
    TodoListCompletedComponent
],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    appRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
