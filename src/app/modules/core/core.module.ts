import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { EntryPointCardComponent } from './components/entry-point-card/entry-point-card.component';
import { NbAccordionModule, NbButtonModule, NbCardModule, NbLayoutModule } from '@nebular/theme';
import { ReviewComponent } from './components/review/review.component';
import { HelperDialogComponent } from './components/helper-dialog/helper-dialog.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { TaskComponent } from '../../sections/academy/components/task/task.component';

@NgModule({
  imports: [
    // Modules
    RouterModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    NbLayoutModule,
    NbButtonModule,
    NbCardModule,
    NbButtonModule,
    NbAccordionModule,
  ],
  declarations: [
    // Components
    HeaderComponent,
    EntryPointCardComponent,
    ReviewComponent,
    TaskComponent,
    HelperDialogComponent,
    DialogComponent,
  ],
  exports: [
    // Components
    HeaderComponent,
    EntryPointCardComponent,
    ReviewComponent,
    TaskComponent,
  ],
})
export class CoreModule {}
