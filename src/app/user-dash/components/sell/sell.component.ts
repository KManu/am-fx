import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { CurrenciesService } from '../../../dash-shared/services/currencies.service';
import { KEYS } from '../../../core/services/constants.service';
import { CustomersService } from 'src/app/dash-shared/services/customers.service';
import { TransactionsService } from 'src/app/core/services/transactions.service';
import { MatStepper } from '@angular/material';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss']
})
export class SellComponent implements OnInit {

  @ViewChild('stepper') stepper: MatStepper;

  public sellGHSForm: FormGroup;
  public newCustomerForm: FormGroup;
  public existingCustomerForm: FormGroup;

  public customerDetails;

  currencyRate = 0;
  rates = {
    dollars: 4.9,
    euros: 5.6,
    pounds: 6.3,
    sar: 0.37,
    can: 3.7,
    cfa: 0.008,
    sw_fr: 4.9
  };
  currencyPairs = [];
  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private localStorage: LocalStorage,
    private currencyService: CurrenciesService,
    private customerService: CustomersService,
    private transactionService: TransactionsService
  ) { }

  ngOnInit() {
    this.formInit();
    this.getCurrencyPairs();
  }

  formInit() {
    // new customer form
    this.newCustomerForm = this.formBuilder.group({
      category: ['', Validators.compose([
        Validators.required
      ])],
      name: ['', Validators.compose([
        Validators.required
      ])],
      idType: ['', Validators.compose([
        Validators.required
      ])],
      idNumber: ['', Validators.compose([
        Validators.required
      ])],
      nationality: ['', Validators.compose([
        Validators.required
      ])],
      residentialAddress: ['', Validators.compose([
        Validators.required
      ])]
    });

    this.sellGHSForm = this.formBuilder.group({
      currencyPair: ['', Validators.compose([
        Validators.required
      ])],
      amount: ['', Validators.compose([
        Validators.required
      ])],
    });

    this.existingCustomerForm = this.formBuilder.group({
      code: ['', Validators.required],
      idType: ['', Validators.required],
      idNumber: ['', Validators.required]
    });

  }

  clearSellForm() {
    this.sellGHSForm.reset();
  }

  getCurrencyPairs() {
    return this.localStorage
      .getItem(KEYS.userData).toPromise()
      .then((userData: any) => {
        const user = {
          _id: userData._id,
          org: userData.organisation._id,
        };
        return this.currencyService.getCurrencyPairsByOrg(user);
      })
      .then((res: any) => {
        if (res.status === true) {
          this.currencyPairs = res.data;
        } else {
          this.toastr.warning(res.message, res.title);
        }


      })
      .catch((error) => {
        this.toastr.error('Could not get currencies', 'Error');
      });
  }

  createCustomer(customerDetails) {
    this.localStorage.getItem(KEYS.userData).toPromise()
      .then((userdata: any) => {
        customerDetails.org = userdata.organisation._id;
        customerDetails.creator = userdata._id;
        this.customerService.createCustomer(customerDetails);
      })
      .then((res: any) => {
        if (res.status === true) {
          this.customerDetails = res.data;
          // signal customer creation complete
          this.stepper.next();
        }
      })
      .catch(error => {
        this.toastr.error(error.message || 'Error creating customer', error.title || 'Error');
      });
  }

  getCustomerDetails(payload) {
    this.localStorage.getItem(KEYS.userData).toPromise()
      .then((userdata: any) => {
        payload.org = userdata.organisation._id;
        payload.creator = userdata._id;
        return this.customerService.getCustomerDetailsById(payload);
      })
      .then((res: any) => {
        if (res.status === true) {
          this.customerDetails = res.data;
          this.stepper.next();
        }
      })
      .catch(error => {
        this.toastr.error(error.message || 'Error creating customer', error.title || 'Error');
      });
  }

  submitTransactionForm() {
    this.transactionService.createTransaction(this.sellGHSForm)
      .then((res: any) => {
        if (res.status === true) {
          this.toastr.success('', res.title);
        } else {
          this.toastr.error('', 'Failed');
        }
      });

  }

}
