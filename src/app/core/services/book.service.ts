import { Injectable, inject } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, query, updateDoc, where } from '@angular/fire/firestore';
import { Book } from '../models/book';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  db: Firestore = inject(Firestore);

  constructor() { }

  getAllBooksByUser(createdBy: string): Observable<Book[]> {
    const dbCollection = collection(this.db, '/books');
    const queried = query(dbCollection, where('createdBy', '==', createdBy));

    return collectionData(queried, { idField: 'id' });
  }

  createBook(book: Book): Observable<any> {
    const userId = localStorage.getItem('userId');
    book.createdBy = userId!;
    const dbCollection = collection(this.db, '/books');
    return from(addDoc(dbCollection, book));
  }

  deleteBook(bookId: string): Observable<any> {
    const docRef = doc(this.db, '/books', bookId);
    return from(deleteDoc(docRef));
  }
  updateBook(bookId: string, data: Partial<Book>): Observable<any> {
    const docRef = doc(this.db, '/books', bookId);
    
    return from(updateDoc(docRef, data));
  }  
}