import {Injectable} from '@angular/core';
import {NgEntityService} from '@datorama/akita-ng-entity-service';
import {TodoQuery} from './todo.query';
import {TodoSocket} from './todo.socket';
import {TodoState, TodoStore} from './todo.store';



@Injectable({providedIn: 'root'})
export class TodoService extends NgEntityService<TodoState> {
  constructor(public readonly query: TodoQuery, protected store: TodoStore, private readonly todoSocket: TodoSocket) {
    super(store);
    todoSocket.on('onAdd', event => this.store.add(event.todo));
    todoSocket.on('onRemove', event => this.store.remove(event.todo.id));
  }
}
