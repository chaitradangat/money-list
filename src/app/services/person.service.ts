import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import {Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PersonService {

  //todo : initialize this apiurl from config or environment variables
  apiUrl! : string;

  constructor(private httpClient:HttpClient) 
  { 
        if(this.apiUrl == null || this.apiUrl == '')
        {
          this.apiUrl =  `http://${location.hostname}:3000/person`;
        }
  }

  getPersonData() : any
  {
    this.httpClient.get(this.apiUrl).subscribe();
  }

}
