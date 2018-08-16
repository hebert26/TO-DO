import { Component, OnDestroy, OnInit } from "@angular/core";
import { Select, Store } from "@ngxs/store";
import { Subscription } from "rxjs";
import { ClearCompleted, CompletedAll, TodoFromServer } from "../store/todo.actions";
import { TodoState } from "../store/todo.state";
import { TodoService } from "../shared/todo.service";
import { Todo } from "../model/models";

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit, OnDestroy {

    countTodos: number;
    showFooter: boolean;
    @Select(TodoState.getTodos) todos$;
    @Select(TodoState.getFilter) currentFilter$;
    subs: Subscription;

    constructor(private store: Store, private todoService: TodoService) {
    }

    ngOnInit() {
        this.subs = this.todos$.subscribe(todos => {
            this.countTodos = todos.filter(t => !t.completed).length;
            this.showFooter = todos.length > 0;
        });
        this.store.dispatch(new TodoFromServer());

    }

    clearCompleted() {
        this.store.dispatch(new ClearCompleted());
    }

    completedAll() {
        this.store.dispatch(new CompletedAll());
    }

    ngOnDestroy(): void {
        this.subs.unsubscribe();
    }

}
