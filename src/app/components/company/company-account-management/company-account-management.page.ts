import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { isPlatform } from '@ionic/angular';

@Component({
  selector: 'app-company-account-management',
  templateUrl: './company-account-management.page.html',
  styleUrls: ['./company-account-management.page.scss'],
})
export class CompanyAccountManagementPage implements OnInit {
  user = null;
  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingController: LoadingController,
    private alertController: AlertController
  ) {}

  ngOnInit() {}

  goToManagementPage() {
    this.router.navigateByUrl('/company/vehicle-management', {
      replaceUrl: true,
    });
  }
  goToHomePage() {
    this.router.navigateByUrl('/company/home', {
      replaceUrl: true,
    });
  }
  goToInfoPage() {
    this.router.navigateByUrl('/company/emergency-contacts', {
      replaceUrl: true,
    });
  }

  goToUpdatePage() {
  }

  getUserName() {
    return 'Driver';
  }

  async logout() {
    await this.authService.logout();
    this.router.navigateByUrl('/company/login', { replaceUrl: true });
  }

  async signOut() {
    await GoogleAuth.signOut();
    console.log('user: ', this.user);
  }
}