import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule, MatIconModule, MatToolbarModule
  ]
})
export class CoreModule { }
