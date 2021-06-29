import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start.component';
import { StartRoutingModule } from './start-routing.module';
import { NbAccordionModule, NbButtonModule, NbCardModule, NbLayoutModule } from '@nebular/theme';

@NgModule({
  declarations: [StartComponent],
  imports: [StartRoutingModule, CommonModule, NbLayoutModule, NbButtonModule, NbCardModule, NbAccordionModule],
})
export class StartModule {}
