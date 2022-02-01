import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcademyComponent } from './academy.component';
import { HtmlComponent } from './sections/html/html.component';
import { CssComponent } from './sections/css/css.component';
import { JavascriptComponent } from './sections/javascript/javascript.component';
import { TypescriptComponent } from './sections/typescript/typescript.component';
import { JobComponent } from './sections/job/job.component';
import { IonicComponent } from './sections/ionic/ionic.component';
import { AngularComponent } from './sections/angular/angular.component';
import { SectionGuard } from '../../modules/core/guards/section.guard';
import { BootstrapComponent } from './sections/bootstrap/bootstrap.component';
import { NestjsComponent } from './sections/nestjs/nestjs.component';
import { GitBasicsComponent } from './sections/git-basics/git-basics.component';
import { MilestoneComponent } from './components/milestone/milestone.component';
import { PackagesComponent } from './sections/packages/packages.component';
import { DesignComponent } from './sections/design/design.component';
import { DockerBasicsComponent } from './sections/docker-basics/docker-basics.component';
import { PrototypingComponent } from './sections/prototyping/prototyping.component';
import { AutomatedTestsComponent } from './sections/automated-tests/automated-tests.component';
import { TeamWorkComponent } from './sections/teamwork/teamwork.component';

// ####################################################################
// If you got a new section, add it to the routes-array like the others
// ####################################################################
const routes: Routes = [
  {
    path: '',
    component: AcademyComponent,
    children: [
      {
        path: 'beruf',
        component: JobComponent,
        canActivate: [SectionGuard],
        data: { matomoTitle: 'Beruf' },
      },
      {
        path: 'html',
        component: HtmlComponent,
        canActivate: [SectionGuard],
        data: { matomoTitle: 'HTML' },
      },
      {
        path: 'css',
        component: CssComponent,
        canActivate: [SectionGuard],
        data: { matomoTitle: 'CSS' },
      },
      {
        path: 'bootstrap',
        component: BootstrapComponent,
        canActivate: [SectionGuard],
        data: { matomoTitle: 'Bootstrap' },
      },
      {
        path: 'git-basics',
        component: GitBasicsComponent,
        canActivate: [SectionGuard],
        data: { matomoTitle: 'Git Basics' },
      },
      {
        path: 'javascript',
        component: JavascriptComponent,
        canActivate: [SectionGuard],
        data: { matomoTitle: 'JavaScript' },
      },
      {
        path: 'typescript',
        component: TypescriptComponent,
        canActivate: [SectionGuard],
        data: { matomoTitle: 'TypeScript' },
      },
      {
        path: 'teamwork',
        component: TeamWorkComponent,
        canActivate: [SectionGuard],
        data: { matomoTitle: 'Teamwork' },
      },
      {
        path: 'prototyping',
        component: PrototypingComponent,
        canActivate: [SectionGuard],
        data: { matomoTitle: 'Prototyping' },
      },
      {
        path: 'angular',
        component: AngularComponent,
        canActivate: [SectionGuard],
        data: { matomoTitle: 'Angular' },
      },
      {
        path: 'ionic',
        component: IonicComponent,
        canActivate: [SectionGuard],
        data: { matomoTitle: 'Ionic' },
      },
      {
        path: 'docker-basics',
        component: DockerBasicsComponent,
        canActivate: [SectionGuard],
        data: { matomoTitle: 'Docker Basics' },
      },
      {
        path: 'nestjs',
        component: NestjsComponent,
        canActivate: [SectionGuard],
        data: { matomoTitle: 'NestJS' },
      },
      {
        path: 'packages',
        component: PackagesComponent,
        canActivate: [SectionGuard],
        data: { matomoTitle: 'Packages' },
      },
      {
        path: 'design',
        component: DesignComponent,
        canActivate: [SectionGuard],
        data: { matomoTitle: 'Design' },
      },
      {
        path: 'automatisierte-tests',
        component: AutomatedTestsComponent,
        canActivate: [SectionGuard],
        data: { matomoTitle: 'Automatisierte Tests' },
      },
      {
        path: 'meilenstein/:id',
        component: MilestoneComponent,
        canActivate: [SectionGuard],
        data: { matomoTitle: 'Meilenstein' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcademyRoutingModule {}
