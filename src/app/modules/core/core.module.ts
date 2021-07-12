import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EntryPointCardComponent } from './components/entry-point-card/entry-point-card.component';
import { NbAccordionModule, NbButtonModule, NbCardModule, NbLayoutModule } from '@nebular/theme';
import { ReviewComponent } from './components/review/review.component';
import { HelperDialogComponent } from './components/helper-dialog/helper-dialog.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { BannerComponent } from './components/banner/banner.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { TextImageListComponent } from './components/text-image-list/text-image-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { BrandBannerComponent } from './components/brand-banner/brand-banner.component';
import { HtmlSvgComponent } from './components/svg-components/html-svg/html-svg.component';
import { CssSvgComponent } from './components/svg-components/css-svg/css-svg.component';
import { JavascriptSvgComponent } from './components/svg-components/javascript-svg/javascript-svg.component';
import { TypescriptSvgComponent } from './components/svg-components/typescript-svg/typescript-svg.component';
import { AngularSvgComponent } from './components/svg-components/angular-svg/angular-svg.component';
import { BootstrapSvgComponent } from './components/svg-components/bootstrap-svg/bootstrap-svg.component';
import { IonicSvgComponent } from './components/svg-components/ionic-svg/ionic-svg.component';
import { NestSvgComponent } from './components/svg-components/nest-svg/nest-svg.component';
import { ContactCardComponent } from './components/contact-card/contact-card.component';
import { ReviewListComponent } from './components/review-list/review-list.component';
import { StepsComponent } from './components/steps/steps.component';

@NgModule({
  imports: [
    // Modules
    RouterModule,
    CommonModule,
    HttpClientModule,
    FormsModule,

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
    ReviewComponent,
    CarouselComponent,
    TextImageListComponent,
    BrandBannerComponent,

    // Dialogs
    HelperDialogComponent,
    DialogComponent,
    BannerComponent,

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
  ],
  exports: [
    // Components
    EntryPointCardComponent,
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
  ],
})
export class CoreModule {}
