import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { redirectUnauthorizedTo, redirectLoggedInTo, canActivate} from '@angular/fire/auth-guard'

// authentication guards
const redirectUnauthorizedToLoginResident = () => redirectUnauthorizedTo(['/resident/login']); 
const redirectLoggedInToHomeResident = () => redirectLoggedInTo(['/resident/home']); 

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'resident/login',
    loadChildren: () =>
      import('./components/resident/resident-login/resident-login.module').then(
        (m) => m.ResidentLoginPageModule
      ),
    ...canActivate(redirectLoggedInToHomeResident),
  },
  {
    path: 'resident/register',
    loadChildren: () =>
      import(
        './components/resident/resident-register/resident-register.module'
      ).then((m) => m.ResidentRegisterPageModule),
  },
  {
    path: 'resident/account-management',
    loadChildren: () =>
      import(
        './components/resident/resident-account-management/resident-account-management.module'
      ).then((m) => m.ResidentAccountManagementPageModule),
    ...canActivate(redirectUnauthorizedToLoginResident),
  },
  {
    path: 'resident/home',
    loadChildren: () =>
      import('./components/resident/resident-home/resident-home.module').then(
        (m) => m.ResidentHomePageModule
      ),
  },
  {
    path: 'resident/proper-disposal-methods',
    loadChildren: () =>
      import(
        './components/proper-disposal-methods/proper-disposal-methods.module'
      ).then((m) => m.ProperDisposalMethodsPageModule),
  },
  {
    path: 'resident/update-account-information',
    loadChildren: () =>
      import(
        './components/resident/resident-update-account-information/resident-update-account-information.module'
      ).then((m) => m.ResidentUpdateAccountInformationPageModule),
  },
  {
    path: 'company/login',
    loadChildren: () =>
      import('./components/company/company-login/company-login.module').then(
        (m) => m.CompanyLoginPageModule
      ),
  },
  {
    path: 'company/home',
    loadChildren: () =>
      import(
        './components/company/company-home/company-home-routing.module'
      ).then((m) => m.CompanyHomePageRoutingModule),
    ...canActivate(redirectUnauthorizedToLoginResident),
  },
  {
    path: 'company/register',
    loadChildren: () =>
      import(
        './components/company/company-register/company-register.module'
      ).then((m) => m.CompanyRegisterPageModule),
  },
  {
    path: 'company/vehicle-management',
    loadChildren: () =>
      import(
        './components/company/company-account-management/company-account-management.module'
      ).then((m) => m.CompanyAccountManagementPageModule),
    ...canActivate(redirectUnauthorizedToLoginResident),
  },
  {
    path: 'company/emergency-contacts',
    loadChildren: () =>
      import(
        './components/company/company-emergency-contacts/company-emergency-contacts.module'
      ).then((m) => m.CompanyEmergencyContactsPageModule),
    ...canActivate(redirectUnauthorizedToLoginResident),
  },
  {
    path: 'resident/notifications',
    loadChildren: () =>
      import(
        './components/resident/resident-notifications/resident-notifications.module'
      ).then((m) => m.ResidentNotificationsPageModule),
    ...canActivate(redirectUnauthorizedToLoginResident),
  },
  {
    path: 'maps',
    loadChildren: () =>
      import('./components/mapbox/mapbox-routing.module').then(
        (m) => m.MapboxPageRoutingModule
      ),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
