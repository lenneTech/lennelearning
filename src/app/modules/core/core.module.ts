import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NbAccordionModule, NbButtonModule, NbCardModule, NbLayoutModule } from '@nebular/theme';
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
import { HeaderComponent } from './components/header/header.component';
import { HelperDialogComponent } from './components/helper-dialog/helper-dialog.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
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

@NgModule({
  imports: [
    // Modules
    RouterModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    // Nebular
    NbLayoutModule,
    NbButtonModule,
    NbCardModule,
    NbButtonModule,
    NbAccordionModule,
  ],
  declarations: [
    // Components
    EntryPointCardComponent,
    InfoCardComponent,
    ReviewComponent,
    CarouselComponent,
    TextImageListComponent,
    BrandBannerComponent,
    AcademyPictureComponent,
    AcademyBannerComponent,

    // Dialogs
    HelperDialogComponent,
    DialogConfirmComponent,
    DialogComponent,
    BannerComponent,
    SolutionDialogComponent,

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
  ],
  exports: [
    // Components
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
  ],
})
export class CoreModule {}
