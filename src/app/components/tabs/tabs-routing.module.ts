import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { redirectUnauthorizedTo, redirectLoggedInTo, canActivate} from '@angular/fire/auth-guard'

// authentication guards
const redirectUnauthorizedToLoginResident = () => redirectUnauthorizedTo(['/resident/login']); 
const redirectLoggedInToHomeResident = () => redirectLoggedInTo(['/resident/home']); 

const routes: Routes = [
  {
    path: 'resident',
    component: TabsPage,
    children: [
      {
        path: 'proper-disposal-methods',
        loadChildren: () =>
          import(
            '../proper-disposal-methods/proper-disposal-methods.module'
          ).then((m) => m.ProperDisposalMethodsPageModule),
      },
      {
        path: 'home',
        /*loadChildren: () =>
          import('../resident/resident-home/resident-home.module').then(
            (m) => m.ResidentHomePageModule
          ),
        */
        loadChildren: () =>
          import('../mapbox/mapbox-routing.module').then(
            (m) => m.MapboxPageRoutingModule
          ),
      },
      {
        path: 'account-management',
        loadChildren: () =>
          import(
            '../resident/resident-account-management/resident-account-management.module'
          ).then((m) => m.ResidentAccountManagementPageModule),
        ...canActivate(redirectUnauthorizedToLoginResident),
      },
      {
        path: 'update-account-information',
        loadChildren: () =>
          import(
            '../resident/resident-update-account-information/resident-update-account-information.module'
          ).then((m) => m.ResidentUpdateAccountInformationPageModule),
        ...canActivate(redirectUnauthorizedToLoginResident),
      },
    ],
  },
  {
    path: '',
    redirectTo: '/resident/login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
