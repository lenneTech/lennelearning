import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { LazyLoadDirective } from './directives/lazy-load.directive';
import { CookieInfoComponent } from './components/cookie-info/cookie-info.component';
import { MatchHeightDirective } from './directives/match-height.directive';
import { EllipsesPipe } from './pipes/ellipses.pipe';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [
    // Modules
    RouterModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
  ],
  declarations: [
    // Components
    HeaderComponent,
    FooterComponent,
    CookieInfoComponent,

    // Directives
    LazyLoadDirective,
    MatchHeightDirective,

    // Pipes
    EllipsesPipe,
  ],
  exports: [
    // Components
    HeaderComponent,
    FooterComponent,
    CookieInfoComponent,

    // Directives
    LazyLoadDirective,
    MatchHeightDirective,

    // Pipes
    EllipsesPipe,
  ],
})
export class CoreModule {}
