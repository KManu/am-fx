import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LocalStorage } from '@ngx-pwa/local-storage';
import * as moment from 'moment';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss']
})
export class BuyComponent implements OnInit {
  public buyGHSForm: FormGroup;

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

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private localStorage: LocalStorage
  ) { }

  ngOnInit() {
    this.formInit();
  }

  formInit() {
    this.buyGHSForm = this.formBuilder.group({
      firstNameControl: ['', Validators.compose([
        Validators.required,
      ])],
      lastNameControl: ['', Validators.compose([
        Validators.required
      ])],
      IDTypeControl: ['', Validators.compose([
        Validators.required
      ])],
      IDNumberControl: ['', Validators.compose([
        Validators.required
      ])],
      currencyControl: ['', Validators.compose([
        Validators.required
      ])],
      amountControl: ['', Validators.compose([
        Validators.required
      ])],
    });

  }

  clearForm() {
    this.buyGHSForm.reset();
  }

  submitForm(formValues) {
    console.log(formValues);
    // store in LS
    /*  [
           {
             date: [transactions]
           },
           {
             date: [transactions]
           }
         ]
     */
    formValues['time'] = moment().format();
    formValues['type'] = 'purchase';
    this.localStorage.getUnsafeItem('am-fx-records')
      .pipe(
        map(result => {
          console.log(result);
          if (result) {
            console.log('The key exists :)');
            // add transaction to the current data
            result.push(formValues);
            return this.localStorage.setItem('am-fx-records', result).subscribe();
          } else {
            console.log('The key does not exist :(');
            // create records object and commit first transaction
            const records = [formValues];
            return this.localStorage.setItem('am-fx-records', records).subscribe();
          }
        })
      )
      .subscribe(
        (result) => {
          console.log(result);
          this.toastr.success('Record stored successfully', 'Success');
        },
        (error) => {
          console.log('error storing data: ', error);
          this.toastr.error('There was an error while storing the data', 'Error');
        });
  }

}
