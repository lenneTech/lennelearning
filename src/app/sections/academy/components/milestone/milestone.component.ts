import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Milestone } from 'src/app/modules/core/interfaces/milestone.interface';
import { SectionService } from 'src/app/modules/core/services/section.service';
@Component({
  selector: 'app-milestone',
  templateUrl: './milestone.component.html',
  styleUrls: ['./milestone.component.scss'],
})
export class MilestoneComponent implements OnInit {
  id: string;
  mileStoneSection: Milestone = {};
  visible = true;
  milestones: Milestone[] = [
    {
      sectionTitle: 'beruf',
      logo: '../../../../../assets/images/brand-images/logos_google-developers.svg',
      description:
        'Du hast den Beruf Webentwickler jetzt schon einmal kennengelernt. Jetzt ist es an der Zeit, dir die einzelnen Fertigkeiten anzueignen',
    },
    {
      sectionTitle: 'html',
      logo: '../../../../../assets/images/brand-images/logos_html-5.svg',
      description:
        'Super, jetzt kennst du schon Html mit all seinen Tags. In der nächsten Sektion geht es weiter mit dem Styling einer Website',
    },
    {
      sectionTitle: 'css',
      logo: '../../../../../assets/images/brand-images/logos_css-3.svg',
      description:
        'Klasse Leistung! Mit dieser Sektion hast du deiner eigenen wunderschönen Webseite ein Stück näher gekommen.',
      exampleList: [
        {
          text: 'Schöne Seiten mit Bildern Texten und vielem mehr darstellen',
          img: 'https://cdn.dribbble.com/users/1615584/screenshots/14947408/media/b9701a4bb0c77c22a8a3150bd91ac80e.jpg?compress=1&resize=1200x900',
        },
      ],
    },
    {
      sectionTitle: 'bootstrap',
      logo: '../../../../../assets/images/brand-images/logos_bootstrap.svg',
      description: 'Jetzt hast du eine Möglichkeit kennengelernt, schneller zu stylen.',
    },
    {
      sectionTitle: 'git-basics',
      logo: '../../../../../assets/images/brand-images/logos_git.svg',
      description: 'Du hast nun die Grundlagen von Git kennengelernt.',
    },
    {
      sectionTitle: 'javascript',
      logo: '../../../../../assets/images/brand-images/logos_javascript.svg',
      description:
        'Top! Jetzt kannst du mit Html, Css, und Javascript deine eigene Webseite bauen, die sowohl optisch schick aussehen kann und dem Nutzer Interaktionsmöglichkeiten bietet.',
      exampleList: [
        {
          text: 'Formulare können jetzt abgeschickt werden',
          img: 'https://cdn.dribbble.com/users/372375/screenshots/14374223/media/438bcf6a3139ac9ae8a9875618a08103.png?compress=1&resize=1200x900',
        },
        {
          text: 'man kann sich einloggen',
          img: 'https://cdn.dribbble.com/users/1774675/screenshots/15392711/media/f27039dc27a65c1d2d2f9bb7a36975da.png?compress=1&resize=1200x900',
        },
      ],
    },
    {
      sectionTitle: 'typescript',
      logo: '../../../../../assets/images/brand-images/logos_typescript-icon.svg',
      description:
        'Du hast jetzt eine Abwandlung von Javascript kennengelernt. Darauf aufbauend kannst das Framework Angular verwenden, welches bei uns ständig Gebrauch findet. Dies lernst du in der übernächsten Sektion.',
    },
    {
      sectionTitle: 'git-experte',
      logo: '../../../../../assets/images/brand-images/logos_github-icon.svg',
      description:
        'Sehr gut! Du hast jetzt die volle Kontrolle über deinen Code und kannst sehr gut mit anderen zusammenarbeiten.',
    },
    {
      sectionTitle: 'angular',
      logo: '../../../../../assets/images/brand-images/logos_angular-icon.svg',
      description: 'Du bist jetzt ein zertifizierter Angular Entwickler und kannst Frontend Anwendungen entwickeln.',
      exampleList: [
        {
          text: 'Dynamische Webseiten mit mehreren Pages, Routing, Animationen und vielem mehr',
          img: 'https://cdn.dribbble.com/users/5994307/screenshots/16110304/media/1e1444082bb06481fbf7da53efdcc1da.png?compress=1&resize=1200x900',
        },
        {
          text: 'Erstellung von modernen Layouts, Formularen sowie Validierungen, um alles rund ums Frontend abzudecken',
          img: 'https://cdn.dribbble.com/users/3515564/screenshots/16110175/media/bf51c714a92e9fa6e3f2cc2b99a75c62.png?compress=1&resize=1200x900',
        },
      ],
    },
    {
      sectionTitle: 'ionic',
      logo: '../../../../../assets/images/brand-images/logos_ionic-icon.svg',
      description:
        'Der Appentwicklung steht nun nichts mehr im Wege. Den Bereich Frontend hast du nun komplett abgeschlossen. Das einzige, was dir jetzt noch fehlt, ist das Backend.',
      exampleList: [
        {
          text: 'Apps designen und funktional gestalten',
          img: 'https://cdn.dribbble.com/users/4140236/screenshots/14397265/media/4b57fe4cedb678b2ce1b47172ac5c999.png?compress=1&resize=1200x900',
        },
        {
          text: 'Apps sowohl auf Android als auch auf IOS publishen',
          img: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1192&q=80',
        },
      ],
    },
    {
      sectionTitle: 'nestjs',
      logo: '../../../../../assets/images/brand-images/logos_nestjs.svg',
      description:
        'Du weißt jetzt auch, wie man ein Backend erstellt. Damit kannst du dich selbst nun einen Fullstack-Developer nennen.',
    },
  ];

  constructor(private sectionService: SectionService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.setMileStoneContent();
  }

  setMileStoneContent() {
    this.milestones.find((section) => {
      if (section.sectionTitle === this.id) {
        this.mileStoneSection = section;
      }
    });
  }

  check(event) {
    this.visible = false;

    // Workaround, weil blur erst nach Scrollen weg geht
    window.scrollBy(0, 1);
  }
}
