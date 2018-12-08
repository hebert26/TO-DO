import { Component, Input, OnInit, ElementRef, ViewChild } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { Todo } from "../model/models";
import { Store } from "@ngxs/store";
import { ToggleTodo, UpdateTodo, DeleteTodo, TodoFromServer } from "../store/todo.actions";

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html'
})
export class TodoComponent implements OnInit {

    @Input() todo: Todo;
    @ViewChild('textInput') textInput: ElementRef;
    textField: FormControl;
    checkField: FormControl;
    editing: boolean;

    constructor(private store: Store) {
        this.textField = new FormControl('', [Validators.required]);
        this.checkField = new FormControl(false);
        this.checkField.valueChanges
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
            this.store.dispatch(new UpdateTodo({ id: id, text: newText.trim() })).subscribe(() => {
                this.store.dispatch(new TodoFromServer()).subscribe(() => {
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

}