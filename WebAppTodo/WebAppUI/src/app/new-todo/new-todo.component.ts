import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormControl, Validators } from '@angular/forms';
import { Store } from "@ngxs/store";
import { AddTodo, TodoFromServer } from "../store/todo.actions";
import { Scavenger } from '@wishtack/rx-scavenger';

@Component({
    selector: 'app-new-todo',
    templateUrl: './new-todo.component.html'
})
export class NewTodoComponent implements OnDestroy, OnInit {
    private _scavenger = new Scavenger(this);
    textField: FormControl;

    constructor(private store: Store) {
        this.textField = new FormControl('', [Validators.required]);
    }

    ngOnInit() {
    }

    saveTodo() {
        if (this.textField.valid) {
            const text: string = this.textField.value;
            this.store.dispatch(new AddTodo(text.trim()))
                .pipe(this._scavenger.collectByKey('newTodo'))
                .subscribe(newTodo => {
                    this.store.dispatch(new TodoFromServer())
                });
            this.textField.setValue('', { emitEvent: false });
        }
    }

    ngOnDestroy() {
    }

}
