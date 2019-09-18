import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../add-admin/error-matcher';
import { ToastrService } from 'ngx-toastr';
import { OrganisationsService } from '../../services/organisations.service';

@Component({
  selector: 'app-add-org',
  templateUrl: './add-org.component.html',
  styleUrls: ['./add-org.component.scss']
})
export class AddOrgComponent implements OnInit {
  orgForm: FormGroup;
  adminForm: FormGroup;
  matcher = new MyErrorStateMatcher();

  constructor(
    private formBuilder: FormBuilder,
    private orgService: OrganisationsService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.orgForm = this.formBuilder.group(
      {
        name: ['', Validators.compose([Validators.required])],
        password: ['', Validators.compose([Validators.required])],
        confirm_password: ['', Validators.compose([Validators.required])],
        licenseNumber: ['', Validators.compose([Validators.required])],
        email: ['', Validators.compose([Validators.required, Validators.email])],
        phone: ['', Validators.compose([Validators.required])],
        location: ['', Validators.compose([Validators.required])]
      },
      { validator: this.checkPasswords }
    );
  }

  checkPasswords(group: FormGroup) {
    // here we have the 'passwords' group
    const pass = group.controls.password.value;
    const confirmPass = group.controls.confirm_password.value;

    return pass === confirmPass ? null : { notSame: true };
  }

  submitForm() {
    console.log(this.orgForm.value);
    const org = this.orgForm.value || [];
    this.orgService
      .createOrganisation(org)
      .then(next => {
        // sucess message
        this.toastr.success('The organisation was created successfully.', 'Creation Successful.');
      })
      .catch(error => {
        console.log(error);
        this.toastr.error(
          'There was an error. Please check your internet connection and try again',
          'Creation Failed.'
        );
      });
  }
}
