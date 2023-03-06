import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public loginForm = this.formBuilder.group({
    password: [''],
    usuario:['']
  });

  constructor(
    private router : Router,
    private formBuilder : FormBuilder,
    private authService : AuthService
   
  ) { }

  ngOnInit(): void {
  }
  login(){
    console.log(this.loginForm.value)
    this.authService.sigin(this.loginForm.value).subscribe((res :any) =>{
      console.log(res);
      localStorage.setItem('token', res.token);
      this.router.navigate(['dashboard']);
    })

  }

}
