import {Injectable} from '@angular/core';
import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import {Payment} from './payment.model';

export interface PaymentState extends EntityState<Payment> {
}

@Injectable({providedIn: 'root'})
@StoreConfig({name: 'payments'})
export class PaymentStore extends EntityStore<PaymentState> {
  constructor() {
    super();
  }
}
