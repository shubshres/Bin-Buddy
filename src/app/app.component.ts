import { Component } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  projectId: 'bin-buddy-69ae3',
  appId: '1:347046716215:web:a1b0a96783d773727970b2',
  storageBucket: 'bin-buddy-69ae3.appspot.com',
  locationId: 'us-central',
  apiKey: 'AIzaSyAiW5xfz59Kq6RKy0t9eakGNPYp518n8Lg',
  authDomain: 'bin-buddy-69ae3.firebaseapp.com',
  messagingSenderId: '347046716215',
  measurementId: 'G-QS84Y18ED7',
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}
  


}

