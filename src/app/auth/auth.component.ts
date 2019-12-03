import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  providers: [AuthService]
})
export class AuthComponent implements OnInit {
  public user : User;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.user = new User;
  }

  //ниже попытки симитировать отправку данных на сервер,
  //при успешной авторизации перенаправляет на страницу companies
  validateLogin() {
    if(this.user.username && this.user.password){
      this.authService.validateLogin(this.user).subscribe(result=>{
        if(result['status'] === 'success') {
          this.router.navigate(['/companies']);
        } else {
          alert('Wrong username password');
        }
      })
    }
  }
}
