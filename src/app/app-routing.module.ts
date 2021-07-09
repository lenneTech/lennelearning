import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InprintComponent } from './pages/inprint/inprint.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./sections/start/start.module').then((m) => m.StartModule),
  },
  {
    path: 'academy',
    loadChildren: () => import('./sections/academy/academy.module').then((m) => m.AcademyModule),
  },
  {
    path: 'impressum',
    component: InprintComponent,
  },
  {
    path: 'datenschutz',
    component: PrivacyComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      onSameUrlNavigation: 'reload',
      scrollPositionRestoration: 'enabled',
      initialNavigation: 'enabled',
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
