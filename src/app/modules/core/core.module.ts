import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { NbButtonModule, NbCardModule } from '@nebular/theme';
import { TaskComponent } from './components/task/task.component';

@NgModule({
  imports: [
    // Modules
    RouterModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    NbCardModule,
    NbButtonModule,
  ],
  declarations: [
    // Components
    HeaderComponent,
    TaskComponent,
  ],
  exports: [
    // Components
    HeaderComponent,
    TaskComponent,
  ],
})
export class CoreModule {}
