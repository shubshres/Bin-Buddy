import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { isPlatform } from '@ionic/angular';

@Component({
  selector: 'app-resident-login',
  templateUrl: './resident-login.page.html',
  styleUrls: ['./resident-login.page.scss'],
})
export class ResidentLoginPage implements OnInit {
  credentials: FormGroup;
  user = null;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private router: Router
  ) {
    if (!isPlatform('capacitor')) {
      GoogleAuth.initialize();
    }
  }

  get email() {
    return this.credentials.get('email');
  }

  get password() {
    return this.credentials.get('password');
  }

  ngOnInit(): void {
    this.credentials = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  async register() {
    const loading = await this.loadingController.create();
    await loading.present();

    const resident = await this.authService.register(this.credentials.value);
    await loading.dismiss();

    if (resident) {
      this.router.navigateByUrl('/resident/account-management', { replaceUrl: true });
    } else {
      this.showAlert('Registration failed', 'Please try again!');
    }
  }

  async login() {
    const loading = await this.loadingController.create();
    await loading.present();

    const resident = await this.authService.login(this.credentials.value);
    await loading.dismiss();

    if (resident) {
      this.router.navigateByUrl('/resident/home', { replaceUrl: true });
    } else {
      this.showAlert('Log In failed', 'Please try again!');
    }
  }

  async showAlert(header, message) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }

  // google capacitor sign in
  async signIn() {
    this.user = await GoogleAuth.signIn();
    console.log('user: ', this.user);

    if (this.user) {
      this.router.navigateByUrl('/resident/home', { replaceUrl: true });
    } else {
      this.showAlert('Log In failed', 'Please try again!');
    }
  }

  async refresh() {
    const authCode = await GoogleAuth.refresh();
    console.log('refresh: ', authCode);
  }

  async signOut() {
    await GoogleAuth.signOut();
    console.log('user: ', this.user);
  }
}
