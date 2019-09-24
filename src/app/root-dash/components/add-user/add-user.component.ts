import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from '../../services/users.service';
import { MyErrorStateMatcher } from '../add-admin/error-matcher';
import { OrganisationsService } from '../../services/organisations.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class RegisterUserComponent implements OnInit {
  userForm: FormGroup;
  adminForm: FormGroup;
  matcher = new MyErrorStateMatcher();
  orgs = [];
  roles = [
    { value: 'app-admin',
  description: 'An administrator for the entire system.'},
    { value: 'org-admin',
  description: 'An administrator for the organisation.'},
    { value: 'org-teller',
  description: 'A teller for an organisation.'}
  ];
  constructor(
    private formBuilder: FormBuilder,
    private userService: UsersService,
    private orgService: OrganisationsService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.getOrgs();
    this.initForm();
  }

  initForm() {
    this.userForm = this.formBuilder.group(
      {
        lastName: ['', Validators.compose([Validators.required])],
        otherNames: ['', Validators.compose([Validators.required])],
        password: ['', Validators.compose([Validators.required])],
        confirmPassword: ['', Validators.compose([Validators.required])],
        email: ['', Validators.compose([Validators.required, Validators.email])],
        phone: ['', Validators.compose([Validators.required])],
        role: ['', Validators.compose([Validators.required])],
        organisation: ['', Validators.compose([Validators.required])]
      },
      { validator: this.checkPasswords }
    );
  }

  getOrgs() {
    this.orgService.getOrgNameAndCode().then((res: any) => {
      console.log(res);
      this.orgs = res.data;
    });
  }

  checkPasswords(group: FormGroup) {
    // here we have the 'passwords' group
    const pass = group.controls.password.value;
    const confirmPass = group.controls.confirmPassword.value;

    return pass === confirmPass ? null : { notSame: true };
  }

  submitForm(userForm) {
    const user = userForm.value || [];
    user.role = userForm.value.role.value;
    console.log(userForm.value);
    console.log(user);
    this.userService
      .createUser(user)
      .then(next => {
        // sucess message
        this.toastr.success('The user was created successfully.', 'Successful.');
      })
      .catch(error => {
        console.log(error);
        this.toastr.error(
          'There was an error. Please check your internet connection and try again',
          'Failed.'
        );
      });
  }
}
