import {Injectable} from '@angular/core';
import {QueryEntity} from '@datorama/akita';
import {PaymentState, PaymentStore} from './payment.store';

@Injectable({providedIn: 'root'})
export class PaymentQuery extends QueryEntity<PaymentState> {

  constructor(protected store: PaymentStore) {
    super(store);
  }
}
