import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcademyComponent } from './academy.component';
import { AcademyRoutingModule } from './academy-routing.module';
import { NbButtonModule, NbCardModule, NbLayoutModule, NbSidebarModule, NbSidebarService } from '@nebular/theme';
import { VideoComponent } from './components/video/video.component';
import { DescriptionDirective } from './directives/description.directive';
import { CoreModule } from 'src/app/modules/core/core.module';
import { TextComponent } from './components/text/text.component';
import { TitleDirective } from './directives/title.directive';
import { VideolistDirective } from './directives/videolist.directive';
import { ExerciseListDirective } from './directives/exerciselist.directive';
import { ExerciseDirective } from './directives/exercise.directive';

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
