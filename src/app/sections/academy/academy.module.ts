import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcademyComponent } from './academy.component';
import { AcademyRoutingModule } from './academy-routing.module';
import {
  NbButtonModule,
  NbCardModule,
  NbLayoutModule,
  NbMenuModule,
  NbMenuService,
  NbSidebarModule,
  NbSidebarService,
} from '@nebular/theme';
import { TaskVideoComponent } from './components/task-video/task-video.component';
import { DescriptionDirective } from './directives/description.directive';
import { CoreModule } from 'src/app/modules/core/core.module';
import { HtmlComponent } from './sections/html/html.component';
import { CssComponent } from './sections/css/css.component';
import { JavascriptComponent } from './sections/javascript/javascript.component';
import { TypescriptComponent } from './sections/typescript/typescript.component';
import { JobComponent } from './sections/job/job.component';
import { IonicComponent } from './sections/ionic/ionic.component';
import { AngularComponent } from './sections/angular/angular.component';
import { TaskTextComponent } from './components/task-text/task-text.component';
import { TitleDirective } from './directives/title.directive';
import { VideolistDirective } from './directives/videolist.directive';
import { ExerciseDirective } from './directives/exercise.directive';
import { ExerciseListDirective } from './directives/exerciselist.directive';
import { SectionComponent } from './components/section/section.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { QuestionListDirective } from './directives/questionlist.directive';
import { ExtraQuestionDirective } from './directives/extraquestion.directive';
import { BootstrapComponent } from './sections/bootstrap/bootstrap.component';
import { LinkDirective } from './directives/link.directive';

@NgModule({
  declarations: [
    AcademyComponent,
    HtmlComponent,
    CssComponent,
    JavascriptComponent,
    TypescriptComponent,
    JobComponent,
    IonicComponent,
    AngularComponent,
    TaskTextComponent,
    VideolistDirective,
    TitleDirective,
    TaskVideoComponent,
    DescriptionDirective,
    ExerciseDirective,
    ExerciseListDirective,
    SectionComponent,
    QuestionListDirective,
    QuestionsComponent,
    ExtraQuestionDirective,
    LinkDirective,
    BootstrapComponent,
  ],
  imports: [
    AcademyRoutingModule,
    CommonModule,
    NbLayoutModule,
    NbSidebarModule,
    NbButtonModule,
    NbCardModule,
    CoreModule,
    NbMenuModule.forRoot(),
  ],
  providers: [NbSidebarService, NbMenuService],
})
export class AcademyModule {}
