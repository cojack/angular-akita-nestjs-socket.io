export interface Payment {
  contact: {
    title: string;
    name: string;
    email: string;
    password: string;
  };
  creditCard: {
    cardType: string;
    cardNumber: string;
    expirationDate: string;
  };
}

export function createPayment() {
  return {
    contact: {
      title: '',
      name: '',
      email: '',
      password: '',
    },
    creditCard: {
      cardType: '',
      cardNumber: '',
      expirationDate: ''
    }
  };
}
