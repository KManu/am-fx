import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from './login.service';

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
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.formBuilder.group({
      emailControl: ['', Validators.compose([Validators.required])],
      passControl: ['', Validators.compose([Validators.required])]
    });
  }

  login(payload) {
    console.log('Login clicked.');
    console.log(payload);
    this.router.navigate(['/', 'dashboard']);
   /*  const data = {
      email: payload.emailControl || '',
      password: payload.passControl || ''
    };
    this.loginService.login(data).subscribe(
      next => {
        console.log('Login res: ', next);
        this.toastr.success('Login successful.');

      },
      err => {
        console.log('Login error: ', err);
        this.toastr.error(err.error.message, 'Login failed.');
      }
    ); */
  }
}
