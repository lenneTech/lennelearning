import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './start.component';
import { CompanyPageComponent } from '../landing-pages/company-page/company-page.component';
import { InternPageComponent } from '../landing-pages/intern-page/intern-page.component';
import { JobInterestedPageComponent } from '../landing-pages/job-interested-page/job-interested-page.component';
import { EntryPointsComponent } from '../landing-pages/entry-points/entry-points.component';
import { ContactPageComponent } from '../landing-pages/contact-page/contact-page.component';
import { SubscriptionPageComponent } from '../landing-pages/subscription-page/subscription-page.component';
import { TeamPageComponent } from '../landing-pages/team-page/team-page.component';
import { WorkshopsComponent } from '../landing-pages/workshops/workshops.component';
import { SponsorsPageComponent } from '../landing-pages/sponsors-page/sponsors-page.component';

const routes: Routes = [
  {
    path: '',
    component: StartComponent,
    pathMatch: 'full',
    data: { matomoTitle: 'Home' },
  },
  {
    path: 'unternehmen',
    component: CompanyPageComponent,
    pathMatch: 'full',
    data: { matomoTitle: 'Unternehmen' },
  },
  {
    path: 'praktikanten',
    component: InternPageComponent,
    pathMatch: 'full',
    data: { matomoTitle: 'Praktikum' },
  },
  {
    path: 'berufsinteressierte',
    component: JobInterestedPageComponent,
    pathMatch: 'full',
    data: { matomoTitle: 'Berufsinteressiert' },
  },
  {
    path: 'lernpfade',
    component: EntryPointsComponent,
    pathMatch: 'full',
    data: { matomoTitle: 'Lernpfade' },
  },
  {
    path: 'team',
    component: TeamPageComponent,
    pathMatch: 'full',
    data: { matomoTitle: 'team' },
  },
  {
    path: 'kontakt',
    component: ContactPageComponent,
    pathMatch: 'full',
    data: { matomoTitle: 'Kontakt' },
  },
  {
    path: 'abonnements',
    component: SubscriptionPageComponent,
    pathMatch: 'full',
    data: { matomoTitle: 'Abonnements' },
  },
  {
    path: 'workshops',
    component: WorkshopsComponent,
    pathMatch: 'full',
    data: { matomoTitle: 'Workshops' },
  },
  {
    path: 'unternehmensnetzwerk',
    component: SponsorsPageComponent,
    pathMatch: 'full',
    data: { matomoTitle: 'Unternehmensnetzwerk' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartRoutingModule {}
