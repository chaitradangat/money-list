import { Component, OnInit } from '@angular/core';
import {Login} from 'src/app/models/login.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUser:Login = new Login();

  constructor() { }

  ngOnInit(): void {
  }

  doLogin(user:Login)
  {
    console.log(`trying to login..${user.name} ${user.password}`); 
  }

}
