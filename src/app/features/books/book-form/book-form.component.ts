import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Book } from '../../../core/models/book';
import { BookService } from '../../../core/services/book.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'xev-book-form',
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.css',
  providers:[DatePipe]
})
export class BookFormComponent implements OnInit {
  readonly dialogRef = inject(MatDialogRef<BookFormComponent>);
  datePipe: DatePipe = inject(DatePipe);

  book: Book | undefined;
  error: string = '';
  isNew = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.book = data;
  }
  bookService: BookService = inject(BookService);

  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    title: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    tags: new FormControl([], Validators.required),
  });

  ngOnInit(): void {
    if (this.book && this.book != undefined) {
      this.form.get('tags')?.setValue(this.book.tags.join(' '));
      this.form.get('title')?.setValue(this.book.title);
      this.form.get('author')?.setValue(this.book.author);
      this.form.get('date')?.setValue(new Date(this.book.date));
    }else{
      // create new record
      this.isNew = true;
    }
  }

  submit() {
    if (this.form.valid) {

      this.form.get('tags')?.setValue(this.splitTags());
      this.form.get('date')?.setValue(this.formatedDate());

      console.log(this.form.value);
      // on record update and create update conditions
      if(this.book){
        // update
        this.bookService.updateBook(this.book.id, this.form.value).subscribe({
          next: () => {
            this.dialogRef.close();
          },
          error: (err) => {
            this.error = 'Someting went wrong. please try again later.'
          },
        });
      }else{
        // create
        this.bookService.createBook(this.form.value).subscribe({
          next: () => {
            this.dialogRef.close();
          },
          error: (err) => {
            this.error = 'Someting went wrong. please try again later.'
          },
        });
      }
      
    } else {
      this.error = 'Please fill in all required fields.';
    }
  }

  formatedDate(): string | null{
    const selectedDate: Date = this.form.value.date;

      // This will convert the date to 'MM/DD/YYYY' formated string
      const formattedDate: string | null = this.datePipe.transform(
        selectedDate,
        'MM/dd/yyyy'
      );
    return formattedDate;
  }

  splitTags(): string[]{
    const rawTags = this.form.value.tags.split(' ');
    const tagsArray = rawTags.filter((tag: string) => tag.trim() !== '');
    return tagsArray;
  }
}
