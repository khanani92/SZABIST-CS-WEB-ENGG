import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-fire-base-example',
  templateUrl: './fire-base-example.component.html',
  styleUrls: ['./fire-base-example.component.css']
})
export class FireBaseExampleComponent implements OnInit {
  ref: any; //Observable<any[]>;
  ref2: any; //Observable<any[]>;
  items: any; //Observable<any[]>;
  constructor(private db: AngularFirestore) {
    this.ref2 = db.collection('items').snapshotChanges();
    this.ref = db.collection('items');
  }
  ngOnInit() {
    console.log(this.getItems());
   this.getItems().subscribe(data => {
    console.log(data);
    this.board = data;
  });


  // this.ref2.subscribe((ItemsSnapshot) => {
  //     this.items = [];
  //     ItemsSnapshot.forEach((ItemData: any) => {
  //       this.items.push({
  //         id: ItemData.payload.doc.id,
  //         data: ItemData.payload.doc.data()
  //       });
  //     })
  //   });

  }

  getItems(): Observable<any> {
  return new Observable((observer) => {
    this.ref.snapshotChanges((querySnapshot) => {
      let Items = [];
      querySnapshot.forEach((doc) => {

        let data = doc.data();
        console.log(data);
        Items.push({
          key: doc.id,
          title: data.title,
          description: data.description,
          author: data.author
        });
      });
      observer.next(Items);
    });
  });
}

// getItem(id: string): Observable<any> {
//   return new Observable((observer) => {
//     this.ref.doc(id).get().then((doc) => {
//       let data = doc.data();
//       observer.next({
//         key: doc.id,
//         title: data.title,
//         description: data.description,
//         author: data.author
//       });
//     });
//   });
// }

// postItems(data): Observable<any> {
//   return new Observable((observer) => {
//     this.ref.add(data).then((doc) => {
//       observer.next({
//         key: doc.id,
//       });
//     });
//   });
// }

// updateItems(id: string, data): Observable<any> {
//   return new Observable((observer) => {
//     this.ref.doc(id).set(data).then(() => {
//       observer.next();
//     });
//   });
// }

// deleteItems(id: string): Observable<{}> {
//   return new Observable((observer) => {
//     this.ref.doc(id).delete().then(() => {
//       observer.next();
//     });
//   });
// }

}
