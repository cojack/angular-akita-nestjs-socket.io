import {Injectable} from '@angular/core';
import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import {Todo} from './todo.model';

export interface TodoState extends EntityState<Todo> {
}

@Injectable({providedIn: 'root'})
@StoreConfig({name: 'todos'})
export class TodoStore extends EntityStore<TodoState> {
  constructor() {
    super();
  }
}
