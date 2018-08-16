import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Todo } from '../model/models';
import { AddTodo, PopulateTodos, ToggleTodo, DeleteTodo, UpdateTodo, ClearCompleted, CompletedAll, TodoFromServer } from './todo.actions';
import { SetFilter } from './todo.filter';
import { TodoService } from '../shared/todo.service';

export class TodoStateModel {
    filter: string;
    todos: Todo[];
}

@State<TodoStateModel>({
    name: 'todos',
    defaults: {
        filter: 'SHOW_ALL',
        todos: []
    }
})

export class TodoState {

    constructor(public todoService: TodoService) {
    }

    @Selector()
    static getTodos(state: TodoStateModel) {
        return state.todos;
    }

    @Selector()
    static getFilter(state: TodoStateModel) {
        return state.filter;
    }

    @Selector()
    static getVisibleTodos(state: TodoStateModel) {
        if (state.filter === 'SHOW_ALL') {
            return state.todos;
        } else if (state.filter === 'SHOW_COMPLETED') {
            return state.todos.filter(t => t.completed);
        } else if (state.filter === 'SHOW_ACTIVE') {
            return state.todos.filter(t => !t.completed);
        }
    }

    @Selector()
    static getStateCompleted(state: TodoStateModel) {
        return state.todos.every(todo => todo.completed);
    }

    @Action(AddTodo)
    add({ getState, patchState }: StateContext<TodoStateModel>, { payload }: AddTodo) {
        const todo: any = { text: payload, completed: false };
        this.todoService.addTodo(todo)
            .subscribe((result: any) => {
                patchState({
                    todos: [...getState().todos, { id: result, text: todo.text, completed: todo.completed }]
                });
            }, error => {
                console.log(error);
            })

    }

    @Action(TodoFromServer)
    addTodosFromServer({ getState, patchState }: StateContext<TodoStateModel>, { }: TodoFromServer) {

        this.todoService.getTodos()
            .subscribe((result: Todo[]) => {
                patchState({
                    todos: result
                });

            }, error => {
                //TODO:HG Add logic to display error to users
                console.log(error);
            });
    }

    @Action(PopulateTodos)
    populate({ patchState }: StateContext<TodoStateModel>, { payload }: PopulateTodos) {
        patchState({
            todos: payload
        });
    }

    @Action(ToggleTodo)
    toggle({ getState, patchState }: StateContext<TodoStateModel>, { payload }: ToggleTodo) {
        let todo: any = getState().todos.filter(td => td.id == payload);
        this.todoService.toggle(todo[0])
            .subscribe((result: any) => {
                patchState({
                    todos: getState().todos.map(td => {
                        if (td.id === payload) {
                            td.completed = !td.completed;
                        }
                        return td;
                    })
                });
            }, error => {
                //TODO:HG Add logic to display error to users
                console.log(error);
            })
    }

    @Action(DeleteTodo)
    delete({ getState, patchState }: StateContext<TodoStateModel>, { payload }: DeleteTodo) {
        let todo: any = getState().todos.filter(td => td.id == payload);
        this.todoService.remove(todo[0])
            .subscribe((result: any) => {
                patchState({
                    todos: getState().todos.filter(td => td.id !== payload)
                });
            }, error => {
                //TODO:HG Add logic to display error to users
                console.log(error);
            })
    }

    @Action(UpdateTodo)
    update({ getState, patchState }: StateContext<TodoStateModel>, { payload }: UpdateTodo) {
        patchState({
            todos: getState().todos.map(td => {
                if (td.id === payload.id) {
                    td.text = payload.text;
                }
                return td;
            })
        });
    }

    @Action(ClearCompleted)
    clear({ getState, patchState }: StateContext<TodoStateModel>) {
        patchState({
            todos: getState().todos.filter(td => !td.completed)
        });
    }

    @Action(CompletedAll)
    complete({ getState, patchState }: StateContext<TodoStateModel>) {
        patchState({
            todos: getState().todos.map(td => {
                td.completed = true;
                return td;
            })
        });
    }

    @Action(SetFilter)
    filter({ patchState }: StateContext<TodoStateModel>, { payload }: SetFilter) {
        patchState({
            filter: payload
        });
    }
} 