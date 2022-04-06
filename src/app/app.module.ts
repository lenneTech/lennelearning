import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';

import { CoreModule } from './modules/core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseModule } from '@lenne.tech/ng-base';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbDialogModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HighlightOptions, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { InprintComponent } from './pages/inprint/inprint.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MatomoModule } from 'sinsunsan-ngx-matomo';

@NgModule({
  declarations: [
    // Components
    AppComponent,

    // Pages
    InprintComponent,
    PrivacyComponent,
    NotFoundComponent,
  ],
  imports: [
    // Angular
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BaseModule.forRoot(environment),
    AppRoutingModule,
    SwiperModule,

    // Forms
    FormsModule,
    ReactiveFormsModule,

    // Http
    HttpClientModule,

    // Intern
    CoreModule,

    // Theme
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'corporate' }),
    NbLayoutModule,
    NbEvaIconsModule,

    // Dialog
    NbDialogModule.forRoot(),

    MatomoModule.forRoot(environment.matomoConfig),
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js'),
        lineNumbersLoader: () => import('highlightjs-line-numbers.js'),
        lineNumbers: true,
      } as HighlightOptions,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
