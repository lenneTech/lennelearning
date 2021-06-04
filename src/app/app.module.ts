import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreModule } from './modules/core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { BaseModule } from '@lenne.tech/ng-base';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    // Components
    AppComponent,

    // Pages
    MainComponent,
  ],
  imports: [
    // Angular
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BaseModule.forRoot(environment),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    // Intern
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
