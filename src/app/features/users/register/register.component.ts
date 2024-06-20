import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../core/models/user';
import { AuthService } from '../../../core/services/auth.service';
import { Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  authService: AuthService = inject(AuthService);
  errorMessage: string | null = null;

  register(user: User){

    this.authService.register(user.email, user.password, user.displayName).subscribe({ next: () => {
      alert('success')
    }, error: (err) => {
      if (err.code === 'auth/email-already-in-use') {
        this.errorMessage = 'This email address is already registered. Please sign in or use a different email.';
      } else {
        this.errorMessage = 'An error occurred during registration. Please try again later.';
      }
    }} )
  }
}

