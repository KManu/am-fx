import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  passHide = true;
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.formBuilder.group({
      emailControl: ['', Validators.compose([
        Validators.required,
      ])],
      passControl: ['', Validators.compose([
        Validators.required
      ])]
    });
  }

  login(payload) {
    console.log('Login clicked.');
    console.log(payload);
    const data = {
      email: payload.emailControl || '',
      password: payload.passControl || ''
    };
    this.loginService.login(data)
      .subscribe(
        next => {
          console.log('Login res: ', next);

          if (next.role === 'app-admin') {
            // am login
            this.router.navigate(['/', 'am-dash']);
          } else if (next.role === 'org-admin') {
            this.router.navigate(['/', 'dashboard']);
          } else {
            this.router.navigate(['/', 'emp-dashboard']);
          }
          /* if (next.org === '' || next.role === '') {
            // throw
            this.toastr.error('Login failed.');
          } else if (next.org === 'kuSfwu24t') {
            if (next.role === 'admin') {
              // am login
              this.router.navigate(['/', 'am-dash']);
            } else if (next.role !== 'admin') {
              this.router.navigate(['/', 'emp-dashboard']);
            }
          } else {
            if (next.role === 'admin') {
              // am login
              this.router.navigate(['/', 'dashboard']);
            } else if (next.role !== 'admin') {
              this.router.navigate(['/', 'emp-dashboard']);
            }
          } */
          /* if (next.user === 'admin') {
            this.toastr.success('Login Successful', '');
            this.router.navigate(['/', 'dashboard']);
          } else {
            this.toastr.success('Login Successful', '');
            this.router.navigate(['/', 'emp-dashboard']);
          } */

        },
        err => {
          console.log('Login error: ', err);
          this.toastr.error(err.error.message, 'Login failed.');
        }
      );
  }


}
