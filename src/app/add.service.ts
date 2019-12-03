import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AddService {
    
    constructor(private http: HttpClient){ }
      
    postData(data: any){
        return this.http.post('#', data);
    }
}