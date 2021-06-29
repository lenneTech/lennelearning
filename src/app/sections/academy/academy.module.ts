import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcademyComponent } from './academy.component';
import { AcademyRoutingModule } from './academy-routing.module';
import { NbButtonModule, NbCardModule, NbLayoutModule, NbSidebarModule, NbSidebarService } from '@nebular/theme';
import { TaskComponent } from './components/task/task.component';
import { VideoComponent } from './components/video/video.component';
import { TitleDirective } from './services/title.directive';
import { DescriptionDirective } from './services/description.directive';
import { VideolistDirective } from './services/videolist.directive';

@NgModule({
  declarations: [
    AcademyComponent,
    TaskComponent,
    VideoComponent,
    TitleDirective,
    DescriptionDirective,
    VideolistDirective,
  ],
  imports: [AcademyRoutingModule, CommonModule, NbLayoutModule, NbSidebarModule, NbButtonModule, NbCardModule],
  providers: [NbSidebarService],
})
export class AcademyModule {}
