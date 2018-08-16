import { Injectable } from "../../../node_modules/@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from "../model/models";
import { Observable } from "../../../node_modules/rxjs";
import { HandleError, HttpErrorHandler } from "../http-error-handler.service";
import { catchError } from 'rxjs/operators';
//Accept: application/json;odata=verbose;
const httpOptions = {
    headers: new HttpHeaders({
        'Accept': 'application/json;odata=verbose',
        'Content-Type': 'application/json'
    })
};

@Injectable({
    providedIn: 'root',
})
export class TodoService {
    private handleError: HandleError;
    private apiUrl: string = "http://localhost:51080/api/todos/";

    constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
        this.handleError = httpErrorHandler.createHandleError('TodoService');
    }

    /** get todos */
    getTodos(): Observable<Todo[]> {
        return this.http.get<Todo[]>(`${this.apiUrl}all`)
            .pipe(
                catchError(this.handleError('getTodos', []))
            );
    }
    /** add a new todo */
    addTodo(todo: Todo): Observable<Todo> {
        return this.http.post<Todo>(`${this.apiUrl}add`, todo, httpOptions)
            .pipe(
                catchError(this.handleError('addTodo', todo))
            );
    }
    /** update a new todo */
    UpdateTodo(todo: Todo): Observable<Todo> {
        return this.http.put<Todo>(`${this.apiUrl}update`, todo, httpOptions)
            .pipe(
                catchError(this.handleError('UpdateTodo', todo))
            );
    }

    /** toggle a new todo */
    toggle(todo: Todo): Observable<Todo> {
        return this.http.put<Todo>(`${this.apiUrl}toggle`, todo, httpOptions)
            .pipe(
                catchError(this.handleError('toggle', null))
            );
    }
    /** remove a new todo */
    remove(todo: Todo): Observable<Todo> {
        return this.http.put<Todo>(`${this.apiUrl}remove`, todo, httpOptions)
            .pipe(
                catchError(this.handleError('remove', null))
            );
    }
}