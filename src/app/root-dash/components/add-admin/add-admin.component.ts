import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { OrganisationsService } from '../../services/organisations.service';
import { MyErrorStateMatcher } from './error-matcher';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.scss']
})
export class AddAdminComponent implements OnInit {
  orgForm: FormGroup;
  adminForm: FormGroup;
  matcher = new MyErrorStateMatcher();
  constructor(
    private formBuilder: FormBuilder,
    private orgService: OrganisationsService,
    private userService: UsersService,
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
        license_number: ['', Validators.compose([Validators.required])],
        email: ['', Validators.compose([Validators.required, Validators.email])],
        phone: ['', Validators.compose([Validators.required])],
        location: ['', Validators.compose([Validators.required])]
      },
      { validator: this.checkPasswords }
    );

    this.adminForm = this.formBuilder.group(
      {
        first_name: ['', Validators.compose([Validators.required])],
        last_name: ['', Validators.compose([Validators.required])],
        email: ['', Validators.compose([Validators.required])],
        password: ['', Validators.compose([Validators.required])],
        confirm_password: ['', Validators.compose([Validators.required])]
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

  submit() {
    console.log(this.orgForm.value);
    console.log(this.adminForm.value);
    const org = this.orgForm.value || [];
    const admin = this.adminForm.value || [];
    this.orgService
      .createOrganisation(org)
      .then(next => {
        admin['code'] = next['data'] || '';
        admin['role'] = 'admin';
        console.log(admin);
        return this.userService.createUser(admin);
      })
      .then(next => {
        // sucess message
        this.toastr.success(
          'The organisation and admin user were created successfully.',
          'Creation Successful.'
        );
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
