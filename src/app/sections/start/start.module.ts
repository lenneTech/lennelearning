import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start.component';
import { StartRoutingModule } from './start-routing.module';
import { NbButtonModule, NbCardModule, NbLayoutModule } from '@nebular/theme';
import { CoreModule } from '../../modules/core/core.module';

@NgModule({
  declarations: [StartComponent],
  imports: [StartRoutingModule, CommonModule, CoreModule, NbLayoutModule, NbButtonModule, NbCardModule],
})
export class StartModule {}
