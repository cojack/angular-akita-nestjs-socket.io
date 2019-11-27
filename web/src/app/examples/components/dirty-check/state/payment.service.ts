import {Injectable} from '@angular/core';
import {NgEntityService} from '@datorama/akita-ng-entity-service';
import {PaymentQuery} from './payment-query';
import {PaymentState, PaymentStore} from './payment.store';



@Injectable({providedIn: 'root'})
export class PaymentService extends NgEntityService<PaymentState> {
  constructor(public readonly query: PaymentQuery, protected store: PaymentStore) {
    super(store);
  }
}
