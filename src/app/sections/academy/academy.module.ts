import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcademyComponent } from './academy.component';
import { AcademyRoutingModule } from './academy-routing.module';
import { NbButtonModule, NbLayoutModule, NbSidebarModule, NbSidebarService } from '@nebular/theme';

@NgModule({
  declarations: [AcademyComponent],
  imports: [AcademyRoutingModule, CommonModule, NbLayoutModule, NbSidebarModule, NbButtonModule],
  providers: [NbSidebarService],
})
export class AcademyModule {}
