import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { isPlatform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { doc, docData, Firestore, setDoc } from '@angular/fire/firestore';
import { Storage } from '@angular/fire/storage';
import { AppComponent } from 'src/app/app.component';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { AlertController } from '@ionic/angular';

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
  selector: 'app-resident-update-account-information',
  templateUrl: './resident-update-account-information.page.html',
  styleUrls: ['./resident-update-account-information.page.scss'],
})
@Injectable({
  providedIn: 'root',
})
export class ResidentUpdateAccountInformationPage implements OnInit {
  updatedInformation = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    phoneNumber: new FormControl(''),
  });

  constructor(
    private route: Router,
    private auth: Auth,
    private firestore: Firestore,
    private storage: Storage,
    private appComponent: AppComponent,
    private alertController: AlertController
  ) {}

  ngOnInit() {}

  goBack() {
    this.route.navigate(['/resident/account-management']);
  }

  getUserProfile() {
    const user = this.auth.currentUser;
    const userDocRef = doc(this.firestore, `users/${user.uid}`);
    return docData(userDocRef);
  }

  async updateResidentInformation() {
    const resident = this.auth.currentUser;
    setDoc(doc(db, 'Residents', resident.uid), {
      email: resident.email,
      name: this.updatedInformation.value.name,
      address: this.updatedInformation.value.address,
      phoneNumber: this.updatedInformation.value.phoneNumber,
      resident: true,
      driver: false
    });

    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'your information has been successfully updated!',
      buttons: ['OK'],
    });

    await alert.present();
    
    this.route.navigateByUrl('/resident/account-management', { replaceUrl: true });
  }
}
