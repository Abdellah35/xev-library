import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../../core/models/book';

@Component({
  selector: 'xev-book-detail-card',
  templateUrl: './book-detail-card.component.html',
  styleUrl: './book-detail-card.component.css'
})
export class BookDetailCardComponent {
  @Input() bookDetail!: Book;
  @Output() deleteEM = new EventEmitter();
  @Output() updateEM = new EventEmitter();
}
