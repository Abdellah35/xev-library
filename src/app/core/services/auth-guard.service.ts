import { Injectable, inject } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable, filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
  authService: AuthService = inject(AuthService);
  router: Router = inject(Router);
  constructor() { }

  canActivate(): Observable<boolean> {
    return this.authService.user$.pipe(
      filter((user) => user !== undefined),
      map((user: any) => {
        if (!user) {
          this.router.navigate(['/login']);
          return false;
        }
        return true;
      }));

  }
}
