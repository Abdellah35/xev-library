import { Injectable, inject, signal } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, user } from '@angular/fire/auth';
import { Observable, from } from 'rxjs';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  fireAuth: Auth = inject(Auth);
  user$ = user(this.fireAuth);
  loggedInUser = signal< User | null | undefined >(undefined);

  constructor() { }

  login(email: string, password: string ): Observable<void>{
    const promis = signInWithEmailAndPassword(this.fireAuth, email, password).then(() => {});
    return from(promis);
  }

  register(email: string, password: string, displayName: string ): Observable<void> {
    const promis = createUserWithEmailAndPassword(this.fireAuth, email, password).then(
      response => updateProfile(response.user, { displayName: displayName}),
    );
    return from(promis);
  }
  logout(): Observable<void>{
    const promise = signOut(this.fireAuth);
    return from(promise);
  }
}
