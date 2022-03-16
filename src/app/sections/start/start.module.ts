import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start.component';
import { StartRoutingModule } from './start-routing.module';
import { NbButtonModule, NbCardModule, NbLayoutModule } from '@nebular/theme';
import { CoreModule } from '../../modules/core/core.module';
import { CompanyPageComponent } from '../landing-pages/company-page/company-page.component';
import { InternPageComponent } from '../landing-pages/intern-page/intern-page.component';
import { JobInterestedPageComponent } from '../landing-pages/job-interested-page/job-interested-page.component';
import { BaseModule } from '@lenne.tech/ng-base';
import { EntryPointsComponent } from '../landing-pages/entry-points/entry-points.component';
import { SwiperModule } from 'swiper/angular';
import { ContactPageComponent } from '../landing-pages/contact-page/contact-page.component';
import { SubscriptionPageComponent } from '../landing-pages/subscription-page/subscription-page.component';

@NgModule({
  declarations: [
    StartComponent,
    CompanyPageComponent,
    InternPageComponent,
    JobInterestedPageComponent,
    EntryPointsComponent,
    ContactPageComponent,
    SubscriptionPageComponent,
  ],
  imports: [
    StartRoutingModule,
    CommonModule,
    CoreModule,
    NbLayoutModule,
    NbButtonModule,
    NbCardModule,
    BaseModule,
    SwiperModule,
  ],
})
export class StartModule {}
