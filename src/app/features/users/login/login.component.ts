import { Component, inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { Firestore } from '@angular/fire/firestore';
import { User } from '../../../core/models/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  authService: AuthService = inject(AuthService);
  firestore: Firestore = inject(Firestore);
  router: Router = inject(Router);
  
  errorMessage: string | null = null;

  login(user: User){
    this.errorMessage = null;

    this.authService.login(user.email, user.password).subscribe({ next: () => {
      alert('success')
      this.router.navigate(['/books']);
    }, error: (err) => {
      this.errorMessage = err.message;
    }} )
  }

  
}
