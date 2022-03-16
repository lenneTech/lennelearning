import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NbAccordionModule, NbButtonModule, NbCardModule, NbLayoutModule } from '@nebular/theme';
import { SwiperModule } from 'swiper/angular';
import { VersionHistoryComponent } from 'src/app/sections/academy/components/version-history/version-history.component';
import { AcademyBannerComponent } from './components/academy-banner/academy-banner.component';
import { AcademyPictureComponent } from './components/academy-picture/academy-picture.component';
import { BannerComponent } from './components/banner/banner.component';
import { BrandBannerComponent } from './components/brand-banner/brand-banner.component';
import { CarouselComponent } from './components/carousel/carousel.component';
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
import { ProcessInterestedComponent } from './components/process-interested/process-interested.component';
import { ReviewListComponent } from './components/review-list/review-list.component';
import { ReviewComponent } from './components/review/review.component';
import { SolutionDialogComponent } from './components/solution-dialog/solution-dialog.component';
import { StepsComponent } from './components/steps/steps.component';
import { AngularSvgComponent } from './components/svg-components/angular-svg/angular-svg.component';
import { BootstrapSvgComponent } from './components/svg-components/bootstrap-svg/bootstrap-svg.component';
import { CssSvgComponent } from './components/svg-components/css-svg/css-svg.component';
import { HtmlSvgComponent } from './components/svg-components/html-svg/html-svg.component';
import { IonicSvgComponent } from './components/svg-components/ionic-svg/ionic-svg.component';
import { JavascriptSvgComponent } from './components/svg-components/javascript-svg/javascript-svg.component';
import { NestSvgComponent } from './components/svg-components/nest-svg/nest-svg.component';
import { TypescriptSvgComponent } from './components/svg-components/typescript-svg/typescript-svg.component';
import { TextImageListComponent } from './components/text-image-list/text-image-list.component';
import { TutorCardsComponent } from './components/tutor-cards/tutor-cards.component';
import { UnderlineAnimationComponent } from './components/underline-animation/underline-animation.component';
import { WorkWithUsComponent } from './components/work-with-us/work-with-us.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { MailSentDialogComponent } from './components/mail-sent-dialog/mail-sent-dialog.component';
import { PriceCardComponent } from './components/price-card/price-card.component';
import { PriceBannerComponent } from './components/price-banner/price-banner.component';

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
    ReviewComponent,
    CarouselComponent,
    TextImageListComponent,
    BrandBannerComponent,
    AcademyPictureComponent,
    AcademyBannerComponent,
    GoalsComponent,
    ProcessInterestedComponent,
    WorkWithUsComponent,
    UnderlineAnimationComponent,
    ContactFormComponent,
    PriceBannerComponent,

    // Dialogs
    HelperDialogComponent,
    DialogConfirmComponent,
    DialogComponent,
    BannerComponent,
    SolutionDialogComponent,
    VersionHistoryComponent,

    // SVGs
    HtmlSvgComponent,
    CssSvgComponent,
    JavascriptSvgComponent,
    TypescriptSvgComponent,
    AngularSvgComponent,
    BootstrapSvgComponent,
    IonicSvgComponent,
    NestSvgComponent,
    ContactCardComponent,
    FooterComponent,
    HeaderComponent,

    // Dialogs
    HelperDialogComponent,
    DialogComponent,
    ReviewListComponent,
    StepsComponent,
    FeaturesComponent,
    TutorCardsComponent,
    CompanyTestimonialComponent,
    MailSentDialogComponent,
  ],
  exports: [
    // Components
    PriceCardComponent,
    EntryPointCardComponent,
    InfoCardComponent,
    ReviewComponent,
    BannerComponent,
    CarouselComponent,
    TextImageListComponent,
    FooterComponent,
    HeaderComponent,
    BrandBannerComponent,
    HtmlSvgComponent,
    CssSvgComponent,
    JavascriptSvgComponent,
    TypescriptSvgComponent,
    AngularSvgComponent,
    BootstrapSvgComponent,
    IonicSvgComponent,
    NestSvgComponent,
    ContactCardComponent,
    ReviewListComponent,
    StepsComponent,
    FeaturesComponent,
    TutorCardsComponent,
    CompanyTestimonialComponent,
    AcademyPictureComponent,
    AcademyBannerComponent,
    GoalsComponent,
    ProcessInterestedComponent,
    WorkWithUsComponent,
    ContactFormComponent,
    PriceBannerComponent,
  ],
})
export class CoreModule {}
