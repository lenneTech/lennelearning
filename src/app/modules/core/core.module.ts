import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NbAccordionModule, NbButtonModule, NbCardModule, NbLayoutModule } from '@nebular/theme';
import { SwiperModule } from 'swiper/angular';
import { VersionHistoryComponent } from 'src/app/modules/core/components/version-history/version-history.component';
import { AcademyBannerComponent } from './components/academy-banner/academy-banner.component';
import { AcademyPictureComponent } from './components/academy-picture/academy-picture.component';
import { BannerComponent } from './components/banner/banner.component';
import { BrandBannerComponent } from './components/brand-banner/brand-banner.component';
import { CompanyTestimonialComponent } from './components/company-testimonial/company-testimonial.component';
import { ContactCardComponent } from './components/contact-card/contact-card.component';
import { DialogConfirmComponent } from './components/dialog-confirm/dialog-confirm.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { EntryPointCardComponent } from './components/entry-point-card/entry-point-card.component';
import { FeaturesComponent } from './components/features/features.component';
import { FooterComponent } from './components/footer/footer.component';
import { GoalsComponent } from './components/goals/goals.component';
import { HeaderComponent } from './components/header/header.component';
import { HelperDialogComponent } from './components/helper-dialog/helper-dialog.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { SolutionDialogComponent } from './components/solution-dialog/solution-dialog.component';
import { StepsComponent } from './components/steps/steps.component';
import { TextImageListComponent } from './components/text-image-list/text-image-list.component';
import { UnderlineAnimationComponent } from './components/underline-animation/underline-animation.component';
import { WorkWithUsComponent } from './components/work-with-us/work-with-us.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { MailSentDialogComponent } from './components/mail-sent-dialog/mail-sent-dialog.component';
import { PriceBannerComponent } from './components/price-banner/price-banner.component';
import { InquiryComponent } from './components/inquiry/inquiry.component';
import { PriceCardComponent } from './components/price-card/price-card.component';
import { SponsorsCardComponent } from './components/sponsors-card/sponsors-card.component';

@NgModule({
  imports: [
    // Modules
    RouterModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SwiperModule,

    // Nebular
    NbLayoutModule,
    NbButtonModule,
    NbCardModule,
    NbButtonModule,
    NbAccordionModule,
  ],
  declarations: [
    // Components
    PriceCardComponent,
    EntryPointCardComponent,
    InfoCardComponent,
    TextImageListComponent,
    BrandBannerComponent,
    AcademyPictureComponent,
    AcademyBannerComponent,
    GoalsComponent,
    WorkWithUsComponent,
    UnderlineAnimationComponent,
    ContactFormComponent,
    PriceBannerComponent,
    InquiryComponent,
    SponsorsCardComponent,

    // Dialogs
    HelperDialogComponent,
    DialogConfirmComponent,
    DialogComponent,
    BannerComponent,
    SolutionDialogComponent,
    VersionHistoryComponent,

    ContactCardComponent,
    FooterComponent,
    HeaderComponent,

    // Dialogs
    HelperDialogComponent,
    DialogComponent,
    StepsComponent,
    FeaturesComponent,
    CompanyTestimonialComponent,
    MailSentDialogComponent,
  ],
  exports: [
    // Components
    PriceCardComponent,
    EntryPointCardComponent,
    InfoCardComponent,
    BannerComponent,
    TextImageListComponent,
    FooterComponent,
    HeaderComponent,
    BrandBannerComponent,
    ContactCardComponent,
    StepsComponent,
    FeaturesComponent,
    CompanyTestimonialComponent,
    AcademyPictureComponent,
    AcademyBannerComponent,
    GoalsComponent,
    WorkWithUsComponent,
    ContactFormComponent,
    PriceBannerComponent,
    InquiryComponent,
    SponsorsCardComponent,
  ],
})
export class CoreModule {}
