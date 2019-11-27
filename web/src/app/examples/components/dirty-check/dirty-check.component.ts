import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AkitaNgFormsManager} from '@datorama/akita-ng-forms-manager';
import {Payment} from './state/payment.model';

export interface FormsState {
  payment: Payment;
}

@Component({
  selector: 'app-dirty-check',
  templateUrl: './dirty-check.component.html',
  styleUrls: ['./dirty-check.component.css']
})
export class DirtyCheckComponent implements OnInit, OnDestroy {
  public paymentForm = this.fb.group({
    contact: this.fb.group({
      title: [''],
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['']
    }),
    creditCard: this.fb.group({
      cardType: [''],
      cardNumber: [''],
      expirationDate: ['']
    })
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly formsManager: AkitaNgFormsManager<FormsState>,
  ) {
  }

  get contact() {
    return this.paymentForm.get('contact');
  }

  public ngOnInit(): void {
    this.formsManager.upsert('payment', this.paymentForm, { persistForm: true });
  }

  public ngOnDestroy(): void {
    this.formsManager.unsubscribe('payment');
  }

  public onSubmit() {
    this.paymentForm.reset();
  }

  public onResetClick() {

  }
}
