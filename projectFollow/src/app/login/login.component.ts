import { Component, Inject, inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  private authService = inject(AuthService);
  private router =  inject(Router);

  login(userName:string, password:string) {
    this.authService.validateUser(userName,password);
    if (this.authService.isUserAuthenticated) {
      this.router.navigate([this.authService.returnUrl]);
    }
  }
}
