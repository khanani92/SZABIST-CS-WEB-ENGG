import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fire-base-example',
  templateUrl: './fire-base-example.component.html',
  styleUrls: ['./fire-base-example.component.css']
})
export class FireBaseExampleComponent implements OnInit {
  items: any ; //Observable<any[]>;
  constructor(private db: AngularFirestore) {
    this.items = db.collection('items').valueChanges();
   }

  ngOnInit() {

  }

}
