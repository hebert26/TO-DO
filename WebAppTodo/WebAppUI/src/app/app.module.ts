import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { environment } from '../environments/environment';
import { NewTodoComponent } from './new-todo/new-todo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list-component';
import { TodoComponent } from './todo/todo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TodoState } from './store/todo.state';
import { TodoService } from './shared/todo.service';
import { ErrorsModule } from './core';
let devtools = [];

const routes: Routes = [
  // basic routes
  { path: '', component: TodoListComponent, pathMatch: 'full' },
  { path: ':filter', component: TodoListComponent }
];


addDevTools();

@NgModule({
  declarations: [
    AppComponent,
    NewTodoComponent,
    TodoListComponent,
    FooterComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    NgxsModule.forRoot([
      TodoState
    ]),
    devtools,
    NgbModule.forRoot(),
    ErrorsModule
  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



function addDevTools() {
  if (!environment.production) {
    devtools = [
      NgxsReduxDevtoolsPluginModule.forRoot(),
      NgxsLoggerPluginModule.forRoot()
    ];
  }
}

