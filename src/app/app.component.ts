import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { AddService } from './add.service';
import { Branch } from './models/branch.model';
import { Company } from './models/company.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService, AddService]
})
export class AppComponent implements OnInit {
  companies: any;
  visibility: boolean = false;
  formCompany: boolean = false;
  formBranch: boolean = false;

  //не знаю как сделать проверку на права администратора, isSuperUser - чтобы переключить отображение страницы
  isSuperUser: boolean = true;  

  constructor(private httpDataService: DataService, private httpAddService: AddService) {}

  ngOnInit(){
    this.httpDataService.getData().subscribe((data:any) => {this.companies = data['companyList']});
  }

  hideBranches() {
    this.visibility=false;
  }

  showBranches() {
    this.visibility=true;
  }

  addCompany() {
    this.formCompany=!this.formCompany;
    this.formBranch=false;
  }
  addBranch() {
    this.formBranch=!this.formBranch;
    this.formCompany=false;
  }
  cancel() {
    this.formBranch=false;
    this.formCompany=false;
  }
  //ниже попытки симитировать отправку данных на сервер, 
  //задумывалось,что возвращается обновленный список компаний и обновляется this.companies
  saveBranch(company: string, executive: string, address: string, telephone: string) {
    this.httpAddService.postData({'type': 'branch', 'unit': new Branch(company, executive, address, telephone)})
    .subscribe(
      (data: any) => {this.companies=data['companyList']},
      error => console.log(error));
  }
  saveCompany(fullName: string, shortName: string, inn: string, kpp: string, founder: string, address: string, telephone: string) {
    this.httpAddService.postData({'type': 'company', 'unit': new Company(fullName, shortName, inn, kpp, founder, address, telephone)})
    .subscribe(
      (data: any) => {this.companies=data['companyList']},
      error => console.log(error));
  }
}
