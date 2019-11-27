import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
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
  public paymentForm: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly formsManager: AkitaNgFormsManager<FormsState>,
  ) {
  }

  public ngOnInit(): void {
    if (this.formsManager.hasForm('payment')) {
      this.formsManager.selectNgForm('payment').subscribe(form => this.paymentForm = form);
    } else {
      this.buildForm();
    }
  }

  public ngOnDestroy(): void {
    this.formsManager.unsubscribe('payment');
  }

  public onSubmit() {

  }

  public onResetClick() {

  }

  private buildForm() {
    this.paymentForm  = this.fb.group({
      contact: this.fb.group({
        title: [''],
        name: [''],
        email: [''],
        password: ['']
      }),
      creditCard: this.fb.group({
        cardType: [''],
        cardNumber: [''],
        expirationDate: ['']
      })
    });
    this.formsManager.upsert('payment', this.paymentForm, { persistForm: true });
  }
}
