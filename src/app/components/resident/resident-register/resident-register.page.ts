import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-resident-register',
  templateUrl: './resident-register.page.html',
  styleUrls: ['./resident-register.page.scss'],
})
export class ResidentRegisterPage implements OnInit {
  credentials: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private router: Router
  ) {}

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
      this.router.navigateByUrl('/resident/update-account-information', { replaceUrl: true });
    } else {
      this.showAlert('registration failed', 'please try again!');
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
}
