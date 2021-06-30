import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcademyComponent } from './academy.component';
import { AcademyRoutingModule } from './academy-routing.module';
import { NbButtonModule, NbCardModule, NbLayoutModule, NbSidebarModule, NbSidebarService } from '@nebular/theme';
import { VideoComponent } from './components/video/video.component';
import { TitleDirective } from './services/title.directive';
import { DescriptionDirective } from './services/description.directive';
import { VideolistDirective } from './services/videolist.directive';
import { TextComponent } from './components/text/text.component';
import { ExerciseListDirective } from './services/exerciselist.directive';
import { ExerciseDirective } from './services/exercise.directive';
import { CoreModule } from 'src/app/modules/core/core.module';

@NgModule({
  declarations: [
    AcademyComponent,
    VideoComponent,
    TitleDirective,
    DescriptionDirective,
    VideolistDirective,
    TextComponent,
    ExerciseListDirective,
    ExerciseDirective,
  ],
  imports: [
    AcademyRoutingModule,
    CommonModule,
    NbLayoutModule,
    NbSidebarModule,
    NbButtonModule,
    NbCardModule,
    CoreModule,
  ],
  providers: [NbSidebarService],
})
export class AcademyModule {}
