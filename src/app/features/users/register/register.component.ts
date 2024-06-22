import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../core/models/user';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  authService: AuthService = inject(AuthService);
  router: Router = inject(Router);

  errorMessage: string | null = null;

  register(user: User){

    this.authService.register(user.email, user.password, user.displayName).subscribe({ next: () => {
      this.authService.login(user.email, user.password);
      this.router.navigate(['/books']);
    }, error: (err) => {
      if (err.code === 'auth/email-already-in-use') {
        this.errorMessage = 'email is already registered.';
      } else {
        this.errorMessage = 'An error occurred during registration.';
      }
    }} )
  }
}

