import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LocalStorage, JSONSchema } from '@ngx-pwa/local-storage';
import { CurrenciesService } from '../../../dashboard-shared/services/currencies.service';
import { TransactionsService } from '../../../core/services/transactions.service';
import { Subscription } from 'rxjs';


interface Users {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  organisation_code: string;
  role: string;
  activated: string;
  created: Date;

}

const userSchema: JSONSchema = {
  type: 'object',
  properties: {
    id: { type: 'number' },
    first_name: { type: 'string' },
    last_name: { type: 'string' },
    email: { type: 'string' },
    organisation_code: { type: 'string' },
    role: { type: 'string' },
    activated: { type: 'string' },
    created: { type: 'string' },
  },
  required: ['id', 'first_name', 'last_name', 'email', 'organisation_code', 'role', 'activated', 'created']
};


@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss']
})
export class BuyComponent implements OnInit, OnDestroy {

  public buyGHSForm: FormGroup;

  currencies = [];

  currencyRate = 0;
  rates = [];

  rate;
  selectedCurrency;
  selectedRate: number;

  subs = new Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    public currenciesService: CurrenciesService,
    public transactionsService: TransactionsService,
    public storage: LocalStorage
  ) { }


  ngOnInit() {
    this.formInit();
    this.getCurrencies();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  getCurrencies() {
    this.storage.getItem<Users>('am-user', { schema: userSchema }).toPromise()
      .then(res => {
        const user = {
          id: res.id,
          organisation_code: res.organisation_code
        };
        return user;
      })
      .then(res => {
        return this.currenciesService.getCurrenciesByOrg(res);
      })
      .then(data => {
        this.currencies = data;
        this.rates = data.map(e => {
          return e.buying_rate;
        });
      })
      .catch(error => {
        console.log(error);
        this.toastr.error('There was an error retrieving the currency rates. Refresh the page to try again', 'Error');
      });
  }

  formInit() {
    this.buyGHSForm = this.formBuilder.group({
      full_name: ['', Validators.compose([
        Validators.required,
      ])],
      currency: ['', Validators.compose([
        Validators.required
      ])],
      amount: ['', Validators.compose([
        Validators.required
      ])],
      id_type: ['', Validators.compose([
        Validators.required
      ])],
      id_number: ['', Validators.compose([
        Validators.required
      ])],
      home_country: ['', Validators.compose([
        Validators.required
      ])],
      residential_address: ['', Validators.compose([
        Validators.required
      ])],
      post_address: ['', Validators.compose([
        Validators.required
      ])]
    });

    const a = this.buyGHSForm.get('currency').valueChanges
      .subscribe(value => {
        this.selectedCurrency = this.currencies.find(e => e.code === value);
        this.selectedRate = this.selectedCurrency.buying_rate;
      });

    this.subs.add(a);

  }

  clearForm() {
    this.buyGHSForm.reset();
  }

  submitForm(formValues) {
    // append other data like teller id and type
    formValues['type'] = 'buy';
    this.storage.getItem<Users>('am-user', { schema: userSchema })
      .subscribe(user => {
        // console.log(user);
        formValues['teller_id'] = user.id;
        formValues['organisation_code'] = user.organisation_code;
        formValues['rate'] = this.selectedCurrency.buying_rate;
        formValues['currency_code'] = this.selectedCurrency.code;
        formValues['currency_name'] = this.selectedCurrency.name;


        this.transactionsService.createTransaction({ transaction: formValues })
          .then(res => {
            this.toastr.success('Transaction submitted successfully.', 'Success');
            // show modal with transaction data for printing
          })
          .catch(err => {
            console.log(err);
            this.toastr.error('There was an error submitting the transaction. Please wait a moment and try again', 'Error');
          });
      });

    // this.storage.getUnsafeItem()
  }

}
