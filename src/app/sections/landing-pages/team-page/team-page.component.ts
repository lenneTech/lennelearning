import { Component } from '@angular/core';

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.scss'],
})
export class TeamPageComponent {
  title = 'Das Team';
  subtitle =
    'Lerne das Team von lenne.Learning kennen und finde die richtigen Ansprechpartner:innen für Deine Fragen rund um Koordination, Akademie oder Projektarbeit.';
  imageUrl = '../../assets/images/banner-images/WELCOME.svg';
  coordination = [
    {
      title: 'Dr. Inga Haase',
      imageUrl: 'https://lenne.tech/assets/images/team/inga_haase.png',
      imageAlt: 'Bild von Inga Haase',
      contact: 'inga.haase@lenne.tech',
      phoneNumber: '02723 - 928 93 2',
    },
  ];
  tutors = [
    {
      title: 'Daniel König',
      imageUrl: 'https://lenne.tech/assets/images/team/daniel_koenig.png',
      imageAlt: 'Bild von Daniel König',
      contact: 'daniel.koenig@lenne.tech',
      frontend: [
        {
          imageUrl: '../../assets/images/brand-images/logo_javascript.svg',
          imageAlt: 'Logo von JavaScript',
          title: 'JavaScript',
        },
        {
          imageUrl: '../../assets/images/brand-images/logo_typescript.svg',
          imageAlt: 'Logo von TypeScript',
          title: 'TypeScript',
        },
        {
          imageUrl: '../../assets/images/brand-images/logo_angular.svg',
          imageAlt: 'Logo von Angular',
          title: 'Angular',
        },
      ],
      backend: [
        {
          imageUrl: '../../assets/images/brand-images/logo_nestjs.svg',
          imageAlt: 'Logo von NestJS',
          title: 'NestJS',
        },
        {
          imageUrl: '../../assets/images/brand-images/logo_graphql.svg',
          imageAlt: 'Logo von GraphQl',
          title: 'GraphQl',
        },
        {
          imageUrl: '../../assets/images/brand-images/logo_mongodb.svg',
          imageAlt: 'Logo von MongoDB',
          title: 'MongoDB',
        },
      ],
    },
    {
      title: 'Robin Zeppenfeld',
      imageUrl: 'https://lenne.tech/assets/images/team/robin_zeppenfeld.png',
      imageAlt: 'Bild von Robin Zeppenfeld',
      contact: 'robin.zeppenfeld@lenne.tech',
      frontend: [
        {
          imageUrl: '../../assets/images/brand-images/logo_html-5.svg',
          imageAlt: 'Logo von HTML',
          title: 'HTML',
        },
        {
          imageUrl: '../../assets/images/brand-images/logo_css-3.svg',
          imageAlt: 'Logo von CSS',
          title: 'CSS',
        },
        {
          imageUrl: '../../assets/images/brand-images/logo_sass.svg',
          imageAlt: 'Logo von SASS',
          title: 'SCSS/SASS',
        },
      ],
      backend: [
        {
          imageUrl: '../../assets/images/brand-images/logo_gitlab.svg',
          imageAlt: 'Logo von GitLab',
          title: 'GitLab',
        },
        {
          imageUrl: '../../assets/images/brand-images/logo_github.svg',
          imageAlt: 'Logo von GitHub',
          title: 'GitHub',
        },
      ],
    },
  ];
  supervisorProjects = [
    {
      title: 'Daniel König',
      imageUrl: 'https://lenne.tech/assets/images/team/daniel_koenig.png',
      imageAlt: 'Bild von Daniel König',
      contact: 'daniel.koenig@lenne.tech',
      frontend: [
        {
          imageUrl: '../../assets/images/brand-images/logo_javascript.svg',
          imageAlt: 'Logo von JavaScript',
          title: 'JavaScript',
        },
        {
          imageUrl: '../../assets/images/brand-images/logo_typescript.svg',
          imageAlt: 'Logo von TypeScript',
          title: 'TypeScript',
        },
        {
          imageUrl: '../../assets/images/brand-images/logo_angular.svg',
          imageAlt: 'Logo von Angular',
          title: 'Angular',
        },
      ],
      backend: [
        {
          imageUrl: '../../assets/images/brand-images/logo_nestjs.svg',
          imageAlt: 'Logo von NestJS',
          title: 'NestJS',
        },
        {
          imageUrl: '../../assets/images/brand-images/logo_graphql.svg',
          imageAlt: 'Logo von GraphQl',
          title: 'GraphQl',
        },
        {
          imageUrl: '../../assets/images/brand-images/logo_mongodb.svg',
          imageAlt: 'Logo von MongoDB',
          title: 'MongoDB',
        },
      ],
    },
    {
      title: 'Robin Zeppenfeld',
      imageUrl: 'https://lenne.tech/assets/images/team/robin_zeppenfeld.png',
      imageAlt: 'Bild von Robin Zeppenfeld',
      contact: 'robin.zeppenfeld@lenne.tech',
      frontend: [
        {
          imageUrl: '../../assets/images/brand-images/logo_html-5.svg',
          imageAlt: 'Logo von HTML',
          title: 'HTML',
        },
        {
          imageUrl: '../../assets/images/brand-images/logo_css-3.svg',
          imageAlt: 'Logo von CSS',
          title: 'CSS',
        },
        {
          imageUrl: '../../assets/images/brand-images/logo_sass.svg',
          imageAlt: 'Logo von SASS',
          title: 'SCSS/SASS',
        },
      ],
      backend: [
        {
          imageUrl: '../../assets/images/brand-images/logo_gitlab.svg',
          imageAlt: 'Logo von GitLab',
          title: 'GitLab',
        },
        {
          imageUrl: '../../assets/images/brand-images/logo_github.svg',
          imageAlt: 'Logo von GitHub',
          title: 'GitHub',
        },
      ],
    },
    {
      title: 'Florian Steinhanses',
      imageUrl: 'https://lenne.tech/assets/images/team/florian_steinhanses.png',
      imageAlt: 'Bild von Florian Steinhanses',
      contact: 'florian.steinhanses@lenne.tech',
      frontend: [
        {
          imageUrl: '../../assets/images/brand-images/logo_javascript.svg',
          imageAlt: 'Logo von JavasScript',
          title: 'JavasScript',
        },
        {
          imageUrl: '../../assets/images/brand-images/logo_ionic.svg',
          imageAlt: 'Logo von Ionic',
          title: 'Ionic',
        },
        {
          imageUrl: '../../assets/images/brand-images/logo_cypress.svg',
          imageAlt: 'Logo von Cypress',
          title: 'Cypress',
        },
      ],
      backend: [
        {
          imageUrl: '../../assets/images/brand-images/logo_nodejs.svg',
          imageAlt: 'Logo von NodeJS',
          title: 'NodeJS',
        },
        {
          imageUrl: '../../assets/images/brand-images/logo_nestjs.svg',
          imageAlt: 'Logo von NestJS',
          title: 'NestJS',
        },
        {
          imageUrl: '../../assets/images/brand-images/logo_mongodb.svg',
          imageAlt: 'Logo von MongoDB',
          title: 'MongoDB',
        },
      ],
    },
  ];

  design = [
    {
      title: 'Katrin Hahn',
      imageUrl: 'https://lenne.tech/assets/images/team/katrin_hahn.png',
      imageAlt: 'Bild von Katrin Hahn',
      contact: 'katrin.hahn@lenne.tech',
      design: [
        {
          imageUrl: '../../assets/images/brand-images/logo_affinity-publisher.svg',
          imageAlt: 'Logo von Affinity Publisher',
          title: 'Affinity Publisher',
        },
        {
          imageUrl: '../../assets/images/brand-images/logo_affinity-designer.svg',
          imageAlt: 'Logo von Affinity Designer',
          title: 'Affinity Designer',
        },
        {
          imageUrl: '../../assets/images/brand-images/logo_adobe-photoshop.svg',
          imageAlt: 'Logo von Adobe Photoshop',
          title: 'Adobe Photoshop',
        },
        {
          imageUrl: '../../assets/images/brand-images/logo_adobe-lightroom.svg',
          imageAlt: 'Logo von Adobe Lightroom',
          title: 'Adobe Lightroom',
        },
        {
          imageUrl: '../../assets/images/brand-images/logo_adobe-illustrator.svg',
          imageAlt: 'Logo von Adobe Illustrator',
          title: 'Adobe Illustrator',
        },
        {
          imageUrl: '../../assets/images/brand-images/logo_figma.svg',
          imageAlt: 'Logo von Figma',
          title: 'Figma',
        },
      ],
    },
  ];

  supervisorCoop = [
    {
      title: 'Kai Haase',
      imageUrl: 'https://lenne.tech/assets/images/team/kai_haase.png',
      imageAlt: 'Bild von Kai Haase',
      contact: 'kai.haase@lenne.tech',
      frontend: [
        {
          imageUrl: '../../assets/images/brand-images/logo_npm.svg',
          imageAlt: 'Logo von npm',
          title: 'npm',
        },
        {
          imageUrl: '../../assets/images/brand-images/logo_eslint.svg',
          imageAlt: 'Logo von ESLint',
          title: 'ESLint',
        },
        {
          imageUrl: '../../assets/images/brand-images/logo_jest.svg',
          imageAlt: 'Logo von Jest',
          title: 'Jest',
        },
      ],
      backend: [
        {
          imageUrl: '../../assets/images/brand-images/logo_rest.svg',
          imageAlt: 'Logo von REST',
          title: 'REST',
        },
        {
          imageUrl: '../../assets/images/brand-images/logo_websocket.svg',
          imageAlt: 'Logo von Websocket',
          title: 'Websocket',
        },
        {
          imageUrl: '../../assets/images/brand-images/logo_postman.svg',
          imageAlt: 'Logo von Postman',
          title: 'Postman',
        },
      ],
    },
    {
      title: 'Pascal Klesse',
      imageUrl: 'https://lenne.tech/assets/images/team/pascal_klesse.png',
      imageAlt: 'Bild von Pascal Klesse',
      contact: 'pascal.klesse@lenne.tech',
      frontend: [
        {
          imageUrl: '../../assets/images/brand-images/logo_angular.svg',
          imageAlt: 'Logo von Angular',
          title: 'Angular',
        },
        {
          imageUrl: '../../assets/images/brand-images/logo_ionic.svg',
          imageAlt: 'Logo von Ionic',
          title: 'Ionic',
        },
        {
          imageUrl: '../../assets/images/brand-images/logo_storybook.svg',
          imageAlt: 'Logo von Storybook',
          title: 'Storybook',
        },
      ],
      backend: [
        {
          imageUrl: '../../assets/images/brand-images/logo_websocket.svg',
          imageAlt: 'Logo von Websocket',
          title: 'Websocket',
        },
        {
          imageUrl: '../../assets/images/brand-images/logo_graphql.svg',
          imageAlt: 'Logo von GraphQL',
          title: 'GraphQL',
        },
        {
          imageUrl: '../../assets/images/brand-images/logo_docker.svg',
          imageAlt: 'Logo von Docker',
          title: 'Docker',
        },
      ],
    },
    {
      title: 'Florian Steinhanses',
      imageUrl: 'https://lenne.tech/assets/images/team/florian_steinhanses.png',
      imageAlt: 'Bild von Florian Steinhanses',
      contact: 'florian.steinhanses@lenne.tech',
      frontend: [
        {
          imageUrl: '../../assets/images/brand-images/logo_javascript.svg',
          imageAlt: 'Logo von JavasScript',
          title: 'JavasScript',
        },
        {
          imageUrl: '../../assets/images/brand-images/logo_ionic.svg',
          imageAlt: 'Logo von Ionic',
          title: 'Ionic',
        },
        {
          imageUrl: '../../assets/images/brand-images/logo_cypress.svg',
          imageAlt: 'Logo von Cypress',
          title: 'Cypress',
        },
      ],
      backend: [
        {
          imageUrl: '../../assets/images/brand-images/logo_nodejs.svg',
          imageAlt: 'Logo von NodeJS',
          title: 'NodeJS',
        },
        {
          imageUrl: '../../assets/images/brand-images/logo_nestjs.svg',
          imageAlt: 'Logo von NestJS',
          title: 'NestJS',
        },
        {
          imageUrl: '../../assets/images/brand-images/logo_mongodb.svg',
          imageAlt: 'Logo von MongoDB',
          title: 'MongoDB',
        },
      ],
    },
  ];
}
