import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InprintComponent } from './pages/inprint/inprint.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./sections/start/start.module').then((m) => m.StartModule),
  },
  {
    path: 'lernpfad',
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
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      onSameUrlNavigation: 'reload',
      scrollPositionRestoration: 'enabled',
      initialNavigation: 'enabled',
      relativeLinkResolution: 'legacy',
      scrollOffset: [0, 80],
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
