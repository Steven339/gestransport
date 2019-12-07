import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../../services/auth.service';
import {  Router } from '@angular/router';
import { UserI } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private titleService: Title, private authService: AuthService, private router: Router) {
    this.titleService.setTitle('Gestransport - Login');
  }

  ngOnInit() {
    if (this.authService.getToken() != null ) {
      this.router.navigate(['/']);
    }
  }

  onLogin(form: { value: any; }): void {
    this.authService.login(form.value).subscribe(res => {
      window.location.reload();
    });
  }

}
