import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { isPlatform } from '@ionic/angular';

@Component({
  selector: 'app-resident-account-management',
  templateUrl: './resident-account-management.page.html',
  styleUrls: ['./resident-account-management.page.scss'],
})
export class ResidentAccountManagementPage implements OnInit {
  user = null;
  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingController: LoadingController,
    private alertController: AlertController
  ) {}

  ngOnInit() {}

  goToUpdatePage() {
    this.router.navigateByUrl('/resident/update-account-information', { replaceUrl: true });
  }

  getUserName() {
    //console.log(this.user.givenName)
    //return this.user.givenName;
    return 'Buddy'; 
  }

  async logout() {
    await this.authService.logout();
    this.router.navigateByUrl('/resident/login', { replaceUrl: true });
  }

  async signOut() {
    await GoogleAuth.signOut();
    console.log('user: ', this.user);
  }
}
