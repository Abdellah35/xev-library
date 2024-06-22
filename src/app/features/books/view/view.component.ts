import { Component, OnInit, inject } from '@angular/core';
import { Book } from '../../../core/models/book';
import { BookService } from '../../../core/services/book.service';
import { MatDialog } from '@angular/material/dialog';
import { BookFormComponent } from '../book-form/book-form.component';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css',
})
export class ViewComponent implements OnInit {
  bookService: BookService = inject(BookService);
  books: Book[] = [];
  readonly dialog = inject(MatDialog);

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    const userId = localStorage.getItem('userId');
    this.bookService
      .getAllBooksByUser(userId!)
      .subscribe((res: Book[]) => {
        this.books = res;
      });
  }

  addBook(): void {
    this.dialog.open(BookFormComponent, {
      width: '600px',
      height: '600px',
    });
  }

  updateBook(book: Book): void {
    this.dialog.open(BookFormComponent, {
      data: book,
      width: '600px',
      height: '600px',
    });
  }


  deleteBook(id: string){
    this.bookService.deleteBook(id).subscribe();
  }
}
