import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
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
      'Der Beruf Webentwickler': [
        { title: 'VSCode', url: 'https://code.visualstudio.com/' },
        { title: 'Slack', url: 'https://slack.com/intl/en-de/' },
        { title: 'Google Chrome', url: 'https://www.google.de/chrome/' },
      ],
    },
    {
      HTML: [
        { title: 'Unsplash', url: 'https://unsplash.com/' },
        { title: 'Pixabay', url: 'https://pixabay.com/de/' },
      ],
    },
    {
      CSS: [
        { title: 'Unsplash', url: 'https://unsplash.com/' },
        { title: 'Pixabay', url: 'https://pixabay.com/de/' },
        { title: 'Coolors', url: 'https://coolors.co/' },
        { title: 'Color-Wheel', url: 'https://color.adobe.com/create/color-wheel/' },
        { title: 'Google Fonts', url: 'https://fonts.google.com/' },
      ],
    },
    {
      Bootstrap: [
        { title: 'Bootstrap', url: 'https://getbootstrap.com/docs/5.0/getting-started/introduction/' },
        { title: 'Bootstrap-Icons', url: 'https://icons.getbootstrap.com/' },
        { title: 'SASS', url: 'https://sass-lang.com/documentation' },
        { title: 'Dribbble', url: 'https://dribbble.com/' },
      ],
    },
    {
      'Git-Basics': [
        { title: 'Git', url: 'https://git-scm.com/downloads' },
        { title: 'GitHub', url: 'https://github.com/' },
      ],
    },
    {
      JavaScript: [
        { title: 'MDN', url: 'https://developer.mozilla.org/de/' },
        { title: 'Stackoverflow', url: 'https://stackoverflow.com/' },
      ],
    },
    {
      TypeScript: [
        { title: 'MDN', url: 'https://developer.mozilla.org/de/' },
        { title: 'Stackoverflow', url: 'https://stackoverflow.com/' },
      ],
    },
    {
      'Git-Experte': [
        { title: 'Git', url: 'https://git-scm.com/downloads' },
        { title: 'GitHub', url: 'https://github.com/' },
      ],
    },
    {
      Angular: [
        { title: 'Angular Docs', url: 'https://angular.io/docs' },
        { title: 'ngBootstrap', url: 'https://ng-bootstrap.github.io/#/getting-started' },
      ],
    },
    {
      Ionic: [
        { title: 'Ionic Docs', url: 'https://ionicframework.com/docs/angular/overview	' },
        { title: 'Ionicons', url: 'https://ionic.io/ionicons' },
        { title: 'Capacitor', url: 'https://capacitorjs.com/docs' },
      ],
    },
    {
      NestJS: [
        { title: 'NestJS Docs', url: 'https://docs.nestjs.com/' },
        { title: 'Docker', url: 'https://www.docker.com/' },
        { title: 'Postman', url: 'https://www.postman.com/' },
        { title: 'GraphQL', url: 'https://graphql.org/learn/' },
        { title: 'MongoDB', url: 'https://docs.mongodb.com/manual/tutorial/getting-started/' },
      ],
    },
  ];
  cheatSheet = [
    { 'Der Beruf Webentwickler': [] },
    { HTML: [{ url: 'https://cheatography.com//karionis/cheat-sheets/html5-deutsch/pdf/' }] },
    { CSS: [{ url: 'https://cheatography.com//karionis/cheat-sheets/css2-1-deutsch/pdf/' }] },
    {
      Bootstrap: [
        { url: 'https://cheatography.com//the-exilant/cheat-sheets/flex-box-german/pdf/' },
        { url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/' },
        { url: 'https://getbootstrap.com/docs/5.0/examples/cheatsheet/' },
      ],
    },
    {
      'Git-Basics': [
        { url: 'https://www.badfv.de/files/Dokumente/tower_cheatsheet_dark_DE.pdf' },
        { url: 'https://training.github.com/downloads/github-git-cheat-sheet.pdf' },
      ],
    },
    { JavaScript: [] },
    { TypeScript: [] },
    {
      'Git-Experte': [
        { url: 'https://www.badfv.de/files/Dokumente/tower_cheatsheet_dark_DE.pdf' },
        { url: 'https://training.github.com/downloads/github-git-cheat-sheet.pdf' },
      ],
    },
    { Angular: [{ url: 'https://angular.io/guide/cheatsheet' }] },
    { Ionic: [] },
    { NestJS: [] },
  ];
  linkList;
  cheatSheetList;

  constructor(private seoService: SEOService, private sectionService: SectionService) {}

  ngOnInit(): void {
    this.seoService.initPageForSEO(this.seoTitle, this.seoDescription, this.seoKeywords);

    this.linkList = this.links.find((links) => links[this.pageTitle]);
    this.linkList = this.linkList[this.pageTitle];
    this.cheatSheetList = this.cheatSheet.find((sheet) => sheet[this.pageTitle]);
    this.cheatSheetList = this.cheatSheetList[this.pageTitle];
  }

  ngAfterViewInit(): void {
    this.sectionService.initSection(this.sectionRef);
  }
}
