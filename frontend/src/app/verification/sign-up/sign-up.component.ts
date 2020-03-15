import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';
import {first} from 'rxjs/operators';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  loginInvalid: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService, private userService: UserService, private matSnackBar: MatSnackBar
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.signUpForm.controls;
  }

  checkPasswords: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    const pass = control.get('password');
    const confPass = control.get('confirmPassword');
    if (pass.value !== '' && confPass.value !== '') {
      return pass.value === confPass.value ? null : {notSame: true};
    }
  };

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      firstName: [''],
      lastName: [''],
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {validators: this.checkPasswords});

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.signUpForm.invalid) {
      return;
    }

    this.loading = true;
    const user: User = new User(this.f.email.value,
      this.f.firstName.value,
      this.f.lastName.value,
      this.f.username.value,
      this.f.password.value);
    this.userService.createUser(user)
      .pipe(first())
      .subscribe(
        data => {
          const sucessMessage = 'User Creation was successful, please login to continue.';
          this.matSnackBar.open(sucessMessage, 'dismiss', {
            duration: 5000,
            verticalPosition: 'top'
          });
          this.router.navigate(['/verification/login']);
        },
        error => {
          this.loginInvalid = true;
          this.loading = false;
        });
  }
}
