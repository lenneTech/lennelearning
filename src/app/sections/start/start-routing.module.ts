import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './start.component';
import { CompanyPageComponent } from '../landing-pages/company-page/company-page.component';
import { InternPageComponent } from '../landing-pages/intern-page/intern-page.component';
import { JobInterestedPageComponent } from '../landing-pages/job-interested-page/job-interested-page.component';

const routes: Routes = [
  {
    path: '',
    component: StartComponent,
    pathMatch: 'full',
  },
  {
    path: 'companies',
    component: CompanyPageComponent,
    pathMatch: 'full',
  },
  {
    path: 'interns',
    component: InternPageComponent,
    pathMatch: 'full',
  },
  {
    path: 'job-interested',
    component: JobInterestedPageComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartRoutingModule {}
