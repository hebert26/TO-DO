import { Component, Input, OnInit, ElementRef, ViewChild, OnDestroy } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { Todo } from "../model/models";
import { Store } from "@ngxs/store";
import { ToggleTodo, UpdateTodo, DeleteTodo, TodoFromServer } from "../store/todo.actions";
import { Scavenger } from '@wishtack/rx-scavenger';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html'
})
export class TodoComponent implements OnDestroy, OnInit {

    private _scavenger = new Scavenger(this);
    @Input() todo: Todo;
    @ViewChild('textInput') textInput: ElementRef;
    textField: FormControl;
    checkField: FormControl;
    editing: boolean;

    constructor(private store: Store) {
        this.textField = new FormControl('', [Validators.required]);
        this.checkField = new FormControl(false);
        this.checkField.valueChanges
            .pipe(this._scavenger.collect())
            .subscribe(state => {
                this.store.dispatch(new ToggleTodo(this.todo.id));
            });
    }

    ngOnInit() {
        this.textField.setValue(this.todo.text);
        this.checkField.setValue(this.todo.completed, { emitEvent: false });
    }

    updateText() {
        if (this.textField.valid && this.editing) {
            const id = this.todo.id;
            const newText: string = this.textField.value;
            this.store.dispatch(new UpdateTodo({ id: id, text: newText.trim() }))
                .pipe(this._scavenger.collect())
                .subscribe(() => {
                    this.store.dispatch(new TodoFromServer())
                        .pipe(this._scavenger.collect())
                        .subscribe(() => {
                            this.editing = !this.editing;
                        })
                });


        }
    }

    activeEditMode() {
        this.editing = true;
        setTimeout(() => {
            this.textInput.nativeElement.focus();
        });
    }

    deleteTodo() {
        this.store.dispatch(new DeleteTodo(this.todo.id));
    }

    ngOnDestroy() {
    }

}