import { Component, inject } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Firestore } from '@angular/fire/firestore';
import { User } from '../../../core/models/user';
import { Router } from '@angular/router';
import { BookService } from '../../../core/services/book.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  authService: AuthService = inject(AuthService);
  firestore: Firestore = inject(Firestore);
  router: Router = inject(Router);
  bookService: BookService = inject(BookService);
  
  errorMessage: string | null = null;

  login(user: User){
    this.errorMessage = null;

    this.authService.login(user.email, user.password).subscribe({ next: () => {
      localStorage.setItem('userId', user.email);
      this.router.navigate(['/books']);
    }, error: (err) => {
      this.errorMessage = err.message;
      if (err.code === 'auth/invalid-email') {
        this.errorMessage = 'Invalid email';
      } else if(err.code === 'auth/invalid-credential') {
        this.errorMessage = 'Invalid credentials';
      } else {
        this.errorMessage = 'An error occurred during registration. Please try again later.';
      }
    }} )

  }

  
}
