import { Component, OnInit, Input, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from './app.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @Output() data:Array<any>;
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  alertService: any;

  constructor(
    private toastService:ToastrService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private appService: AppService,
    // private alertService: AlertService
  ) {

  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    this.appService.post(this.loginForm.value).subscribe((response: any) => {
      if (response.status == true) { 
        this.toastService.success(response.message)
        this.data=response.data;
        console.log("this.data",this.data)
        // this.router.navigate(['/userlist']);
      }
      else {
        this.toastService.error(response.message);
      }
    }, error => {
      this.toastService.error(error);
    });

  }
}
