import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'new';
  isUser = true;
  isavailable = true;
  users =[{name:"ali",age:18},{name:"junaid",age:34},{name:"zubair",age:22},]
  isChangeColor = true;
  testTitle = 'the Car is wHite';
  birthday = new Date();
  constructor() {

   }

  ngOnInit() {

  }

  myFunction(){
    this.isUser = !this.isUser;
    this.isavailable = !this.isavailable;
    this.isChangeColor = !this.isChangeColor;

  }

  myFunction2(event){
    alert(event.target.value);
    //alert(this.title.length);
  }

  onKeydownEvent(event: KeyboardEvent): void {
    alert("onKeydownEvent world")
 }
}
