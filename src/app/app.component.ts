import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from './core/services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
    this.authService.user$.subscribe((user: any) => {
      if(user){
        this.authService.loggedInUser.set({
          email: user.email,
          displayName: user.displayName,
          password: '',
        })
      }else{
        this.authService.loggedInUser.set(null);
      }
      console.log(this.authService.loggedInUser());
      
    });
  }
  authService = inject(AuthService);

  logout(){
    this.authService.logout();
  }

  title = 'xev-library';
}
