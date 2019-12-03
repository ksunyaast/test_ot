import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable()
export class AuthService {
    constructor(private http: HttpClient){}

    validateLogin(user: any){
        return this.http.post('/api/user/login',{
            username : user.username,
            password : user.password
        })
    }
}