import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
      
  bigTitle = ['Posts'] ;
  
  constructor() {
    const config = {
      apiKey: "AIzaSyDBwBUrweVBKZEWQKtj2X5bnDHwQGcFjOg",
      authDomain: "blog-4eb3c.firebaseapp.com",
      databaseURL: "https://blog-4eb3c.firebaseio.com",
      projectId: "blog-4eb3c",
      storageBucket: "blog-4eb3c.appspot.com",
      messagingSenderId: "214130997946",
      appId: "1:214130997946:web:2b5bd99df1ee70b4bf6083",
      measurementId: "G-6SE59PVCGX"
    };
    firebase.initializeApp(config);
  }
 }


