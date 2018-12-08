
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';;
import { Select, Store } from '@ngxs/store';
import { FormControl } from '@angular/forms';
import { CompletedAll } from '../store/todo.actions';
import { ActivatedRoute } from '@angular/router';
import { TodoState } from '../store/todo.state';
import { SetFilter } from '../store/todo.filter';


@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html'
})
export class TodoListComponent implements OnInit {

    checkFieldForm: FormControl;
    @Select(TodoState.getVisibleTodos) todos$;
    @Select(TodoState.getStateCompleted) stateCompleted$;

    constructor(private store: Store,
        private route: ActivatedRoute) {
        this.checkFieldForm = new FormControl();
        this.readParams();
    }

    ngOnInit() {
        this.stateCompleted$.subscribe(status => {
            this.checkFieldForm.setValue(status);
        });
    }

    toggleAll() {
        this.store.dispatch(new CompletedAll());
    }

    private setFilter(filter: string) {
        switch (filter) {
            case 'active': {
                this.store.dispatch(new SetFilter('SHOW_ACTIVE'));
                break;
            }
            case 'completed': {
                this.store.dispatch(new SetFilter('SHOW_COMPLETED'));
                break;
            }
            default: {
                this.store.dispatch(new SetFilter('SHOW_ALL'));
                break;
            }
        }
    }

    private readParams() {
        this.route.params
            .subscribe(params => {
                this.setFilter(params.filter);
            });
    }
}
