import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/users/login/login.component';
import { RegisterComponent } from './features/users/register/register.component';
import { AuthGuardService } from './core/services/auth-guard.service';
import { ViewComponent } from './features/books/view/view.component';

const routes: Routes = [
  {path: '', redirectTo: 'books', pathMatch:'full'},
  {path: 'login', component: LoginComponent, title:'Login'},
  {path: 'register', component: RegisterComponent, title:'Register'},
  {path: 'books', component: ViewComponent, title:'Books', canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
