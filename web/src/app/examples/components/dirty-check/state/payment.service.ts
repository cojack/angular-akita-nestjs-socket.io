import {Injectable} from '@angular/core';
import {NgEntityService} from '@datorama/akita-ng-entity-service';
import {PaymentQuery} from './payment-query';
import {TodoSocket} from './todo.socket';
import {PaymentState, PaymentStore} from './payment.store';



@Injectable({providedIn: 'root'})
export class PaymentService extends NgEntityService<PaymentState> {
  constructor(public readonly query: PaymentQuery, protected store: PaymentStore, private readonly todoSocket: TodoSocket) {
    super(store);
    todoSocket.on('onAdd', event => this.store.add(event.todo));
    todoSocket.on('onRemove', event => this.store.remove(event.todo.id));
  }
}
