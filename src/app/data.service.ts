import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
    
    constructor(private http: HttpClient){ }

    //здесь данные должны из бд конечно прийти, а не из файла
    getData(){
        return this.http.get('assets/companies.json')
    }
}