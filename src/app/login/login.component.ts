import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    LoginForm: FormGroup;
    submitted = false;
    returnUrl: string;
    is_authenticated = false;

    currentUser: any = null;
    
    @BlockUI() blockUI: NgBlockUI;

  constructor(
    public formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.LoginForm = this.formBuilder.group({
        username: [null, [Validators.required]],
        password: [null, [Validators.required]],
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    if (this.authService.isAuthenticated()) {
        this.router.navigate([this.returnUrl ? this.returnUrl : '/index']);
    }
  }

  get f() {
      return this.LoginForm.controls;
  }
  
  onLoginSubmit(){
    this.submitted = true;
    if (this.LoginForm.invalid) {
        return;
    }
    this.blockUI.start('Loading...');

    console.log(this.LoginForm.value)

    this.authService.login(this.LoginForm.value).subscribe(
        data => {
            console.log(data);

            if (data.status === 400) {
                this.toastr.error('Unauthorized request found', 'Error!', { timeOut: 3000 });
                this.blockUI.stop();
                return;
            } else if (data.status === 401) {
                this.toastr.error('Invalid Username Or Password', 'Error!', { timeOut: 3000 });
                this.blockUI.stop();
                return;
            } else if (data.status === 409) {
                this.toastr.error('Invalid Username Or Password', 'Error!', { timeOut: 3000 });
                this.blockUI.stop();
                return;
            }

            if(data.status){
                this.toastr.success('Logging Successfully', 'Success!', { timeOut: 2000 });
                this.router.navigate(['/index']).then(() => {
                    this.blockUI.stop();
                    window.location.reload();
                });
            }else{
                this.toastr.error(data.message, 'Error!', { timeOut: 3000 });
                this.blockUI.stop();
            }
        },
        error => {
            this.blockUI.stop();
            if (error.status === 400) {
                this.toastr.error('Unauthorized request found', 'Error!', { timeOut: 3000 });
            } else if (error.status === 401) {
                this.toastr.error('Invalid Email Or Password', 'Error!', { timeOut: 3000 });
            } else if (error.status === 409) {
                this.toastr.error('Invalid Email Or Password', 'Error!', { timeOut: 3000 });
            }
        }
    );
}

}
