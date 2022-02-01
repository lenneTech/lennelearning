import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SEOService } from '@lenne.tech/ng-base';
import { SectionService } from '../../../../modules/core/services/section.service';

@Component({
  selector: 'section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent implements OnInit, AfterViewInit {
  @ViewChild('section') sectionRef: ElementRef;

  @Input() pageTitle: string;
  @Input() seoTitle: string;
  @Input() seoDescription: string;
  @Input() seoKeywords: string;

  links = [
    {
      beruf: [
        { title: 'VSCode', url: 'https://code.visualstudio.com/' },
        { title: 'Slack', url: 'https://slack.com/intl/en-de/' },
        { title: 'Google Chrome', url: 'https://www.google.de/chrome/' },
      ],
    },
    {
      html: [
        { title: 'Unsplash', url: 'https://unsplash.com/' },
        { title: 'Pixabay', url: 'https://pixabay.com/de/' },
      ],
    },
    {
      css: [
        { title: 'Unsplash', url: 'https://unsplash.com/' },
        { title: 'Pixabay', url: 'https://pixabay.com/de/' },
        { title: 'Coolors', url: 'https://coolors.co/' },
        { title: 'Color-Wheel', url: 'https://color.adobe.com/create/color-wheel/' },
        { title: 'Google Fonts', url: 'https://fonts.google.com/' },
      ],
    },
    {
      bootstrap: [
        { title: 'Bootstrap', url: 'https://getbootstrap.com/docs/5.0/getting-started/introduction/' },
        { title: 'Bootstrap-Icons', url: 'https://icons.getbootstrap.com/' },
        { title: 'SASS', url: 'https://sass-lang.com/documentation' },
        { title: 'Dribbble', url: 'https://dribbble.com/' },
      ],
    },
    {
      'git-basics': [
        { title: 'Git', url: 'https://git-scm.com/downloads' },
        { title: 'GitHub', url: 'https://github.com/' },
      ],
    },
    {
      javascript: [
        { title: 'MDN', url: 'https://developer.mozilla.org/de/' },
        { title: 'Stackoverflow', url: 'https://stackoverflow.com/' },
      ],
    },
    {
      typescript: [
        { title: 'MDN', url: 'https://developer.mozilla.org/de/' },
        { title: 'Stackoverflow', url: 'https://stackoverflow.com/' },
      ],
    },
    {
      teamwork: [
        { title: 'Git', url: 'https://git-scm.com/downloads' },
        { title: 'GitHub', url: 'https://github.com/' },
      ],
    },
    {
      prototyping: [],
    },
    { arbeitsmethoden: [] },
    {
      angular: [
        { title: 'Angular Docs', url: 'https://angular.io/docs' },
        { title: 'ngBootstrap', url: 'https://ng-bootstrap.github.io/#/getting-started' },
      ],
    },
    {
      ionic: [
        { title: 'Ionic Docs', url: 'https://ionicframework.com/docs/angular/overview	' },
        { title: 'Ionicons', url: 'https://ionic.io/ionicons' },
        { title: 'Capacitor', url: 'https://capacitorjs.com/docs' },
      ],
    },
    {
      'docker-basics': [],
    },
    {
      nestjs: [
        { title: 'NestJS Docs', url: 'https://docs.nestjs.com/' },
        { title: 'Docker', url: 'https://www.docker.com/' },
        { title: 'Postman', url: 'https://www.postman.com/' },
        { title: 'GraphQL', url: 'https://graphql.org/learn/' },
        { title: 'MongoDB', url: 'https://docs.mongodb.com/manual/tutorial/getting-started/' },
      ],
    },
    {
      packages: [],
    },
    {
      design: [
        { title: 'Design Stile', url: 'https://www.exovia.de/journal/webdesign-stile-und-richtungen/' },
        { title: 'Farbschema Tool', url: 'https://color.adobe.com/de/create/color-wheel' },
        { title: 'Farbschema Inspiration', url: 'https://colorhunt.co/' },
        { title: 'Tipps für Featured Images', url: 'https://applecartlane.com/blog-featured-image/' },
        { title: 'Mehr zu Layouts', url: 'https://99designs.de/blog/design-tipps/effektives-website-layout/' },
        { title: 'Wie wirken Farben auf Menschen?', url: 'https://visme.co/blog/website-color-schemes/' },
      ],
    },
    {
      'automatisierte-tests': [],
    },
  ];
  cheatSheet = [
    { beruf: [] },
    { html: [{ url: 'https://cheatography.com//karionis/cheat-sheets/html5-deutsch/pdf/' }] },
    { css: [{ url: 'https://cheatography.com//karionis/cheat-sheets/css2-1-deutsch/pdf/' }] },
    {
      bootstrap: [
        { url: 'https://cheatography.com//the-exilant/cheat-sheets/flex-box-german/pdf/' },
        { url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/' },
        { url: 'https://getbootstrap.com/docs/5.0/examples/cheatsheet/' },
      ],
    },
    {
      'git-basics': [
        { url: 'https://www.badfv.de/files/Dokumente/tower_cheatsheet_dark_DE.pdf' },
        { url: 'https://training.github.com/downloads/github-git-cheat-sheet.pdf' },
      ],
    },
    { javascript: [] },
    { typescript: [] },
    {
      teamwork: [
        { url: 'https://www.badfv.de/files/Dokumente/tower_cheatsheet_dark_DE.pdf' },
        { url: 'https://training.github.com/downloads/github-git-cheat-sheet.pdf' },
      ],
    },
    { prototyping: [] },
    { arbeitsmethoden: [] },
    { angular: [{ url: 'https://angular.io/guide/cheatsheet' }] },
    { ionic: [] },
    { 'docker-basics': [] },
    { nestjs: [] },
    { packages: [] },
    { design: [] },
    { 'automatisierte-tests': [] },
  ];
  linkList;
  cheatSheetList;

  constructor(private seoService: SEOService, private sectionService: SectionService, private router: Router) {}

  ngOnInit(): void {
    this.seoService.initPageForSEO(this.seoTitle, this.seoDescription, this.seoKeywords);

    const url = this.router.url.split('#')[0].split('/');
    const section = url[url.length - 1];

    this.linkList = this.links.find((links) => links[section])[section];
    this.cheatSheetList = this.cheatSheet.find((sheet) => sheet[section])[section];
  }

  ngAfterViewInit(): void {
    this.sectionService.initSection(this.sectionRef);
  }
}
