import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';
import { BookFormComponent } from './book-form/book-form.component';
import { BookDetailCardComponent } from './book-detail-card/book-detail-card.component';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';

@NgModule({
  declarations: [
    ViewComponent,
    BookFormComponent,
    BookDetailCardComponent,
    
  ],
  imports: [
    CommonModule,
    MatChipsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule, ReactiveFormsModule,  MatInputModule, MatDatepickerModule
  ],
  providers: [provideNativeDateAdapter()]
})
export class BooksModule { }
