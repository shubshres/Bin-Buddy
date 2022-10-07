import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-emergency-contacts',
  templateUrl: './company-emergency-contacts.page.html',
  styleUrls: ['./company-emergency-contacts.page.scss'],
})
export class CompanyEmergencyContactsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

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
}
