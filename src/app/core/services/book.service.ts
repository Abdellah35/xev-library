import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  db: Firestore = inject(Firestore);

  constructor() { }


  getAllBooks(){
    const dbCollection = collection(this.db, "/books");
    collectionData(dbCollection, { idField: 'id' }).subscribe((res: any) => {
        console.log(res);
    });
  }
}
