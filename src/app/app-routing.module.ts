import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/users/login/login.component';
import { RegisterComponent } from './features/users/register/register.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch:'full'},
  {path: 'login', component: LoginComponent, title:'Login'},
  {path: 'register', component: RegisterComponent, title:'Register'},
  {path: 'books', component: LoginComponent, title:'Login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
