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
        'Du hast den Beruf Webentwickler nun schon einmal kennengelernt. Jetzt ist es an der Zeit, dir die einzelnen Fertigkeiten anzueignen. Dazu zählen unter anderem die Grundlagen des Frontends, die in den nächsten Sektionen auf dich zukommen.',
    },
    {
      sectionTitle: 'html',
      logo: '../../../../../assets/images/brand-images/logos_html-5.svg',
      description:
        'Super, jetzt kennst du schon Html mit all seinen Tags. In der nächsten Sektion geht es weiter mit dem Styling einer Webseite',
      exampleList: [
        { title: '', text: 'Webseiten erstellen, die noch kein Styling besitzen aber die Grundstruktur bieten' },
        {
          title: '',
          text: 'Die im Browser eingebauten Entwicklertools nutzen, um den Aufbau einer Seite zu verstehen',
        },
      ],
    },
    {
      sectionTitle: 'css',
      logo: '../../../../../assets/images/brand-images/logos_css-3.svg',
      description:
        'Klasse Leistung! Mit dieser Sektion bist du deiner eigenen wunderschönen Webseite ein Stück näher gekommen.',
      exampleList: [
        {
          title: '',
          text: 'Schöne Seiten mit Bildern, Texten und vielem mehr darstellen',
          imageUrl:
            'https://cdn.dribbble.com/users/1615584/screenshots/14947408/media/b9701a4bb0c77c22a8a3150bd91ac80e.jpg?compress=1&resize=1200x900',
          alt: 'Bild einer Webseite',
        },
      ],
    },
    {
      sectionTitle: 'bootstrap',
      logo: '../../../../../assets/images/brand-images/logos_bootstrap.svg',
      description:
        'Jetzt hast du eine Möglichkeit kennengelernt ein Framework zu verwenden, dass dir viel Arbeit beim Stylen abnehmen kann.',
      exampleList: [
        {
          title: '',
          text: 'In kurzer Zeit einen Blog kreieren',
          imageUrl: 'https://themes.getbootstrap.com/wp-content/uploads/2021/06/preview-screenshot-540x405.jpg',
          alt: 'Bild einer Webseite',
        },
        {
          title: '',
          text: 'Moderne Dashboards designen',
          imageUrl: 'https://themes.getbootstrap.com/wp-content/uploads/2021/06/bubbly-react-1200x900-540x405.jpg',
          alt: 'Bild eines Dashboards',
        },
      ],
    },
    {
      sectionTitle: 'git-basics',
      logo: '../../../../../assets/images/brand-images/logos_git.svg',
      description:
        'Du hast nun die Grundlagen von Git kennengelernt. Wenn sich nun also unauffindbare Fehler in deinem Code einnisten, weißt du was zu tun ist.',
    },
    {
      sectionTitle: 'javascript',
      logo: '../../../../../assets/images/brand-images/logos_javascript.svg',
      description:
        'Top! Jetzt kannst du mit Html, Css, und Javascript deine eigene Webseite bauen, die sowohl optisch schick aussehen kann und zusätzlich dem Nutzer Interaktionsmöglichkeiten bietet.',
      exampleList: [
        {
          title: '',
          text: 'Jegliche Art von Programm schreiben, dass dir in irgendeiner Hinsicht nützlich ist',
          imageUrl:
            'https://images.unsplash.com/photo-1527427337751-fdca2f128ce5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          alt: 'Bild von Programmcode',
        },
        {
          title: '',
          text: 'Deine eigene Seite funktionfähig machen ',
          imageUrl:
            'https://cdn.dribbble.com/users/1774675/screenshots/15392711/media/f27039dc27a65c1d2d2f9bb7a36975da.png?compress=1&resize=1200x900',
          alt: 'Bild eines Logins',
        },
      ],
    },
    {
      sectionTitle: 'typescript',
      logo: '../../../../../assets/images/brand-images/logos_typescript-icon.svg',
      description:
        'Du hast jetzt eine Erweiterung von Javascript kennengelernt, die dir unter anderem mit Typisierungen das Leben erleichtern soll. Darauf aufbauend kannst das Framework Angular verwenden, welches bei uns ständig Gebrauch findet. Dies lernst du in der übernächsten Sektion kennen.',
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
          title: '',
          text: 'Dynamische Webseiten mit mehreren Pages, Routing, Animationen und vielem mehr erstellen',
          imageUrl:
            'https://cdn.dribbble.com/users/5994307/screenshots/16110304/media/1e1444082bb06481fbf7da53efdcc1da.png?compress=1&resize=1200x900',
          alt: 'Bild einer Webseite',
        },
        {
          title: '',
          text: 'Erstellung von modernen Layouts, Formularen sowie Validierungen, um alles rund ums Frontend abzudecken',
          imageUrl:
            'https://cdn.dribbble.com/users/3515564/screenshots/16110175/media/bf51c714a92e9fa6e3f2cc2b99a75c62.png?compress=1&resize=1200x900',
          alt: 'Bild einer Webseite',
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
          title: '',
          text: 'Apps designen und funktional gestalten',
          imageUrl:
            'https://cdn.dribbble.com/users/4140236/screenshots/14397265/media/4b57fe4cedb678b2ce1b47172ac5c999.png?compress=1&resize=1200x900',
          alt: 'Bilder einer App',
        },
        {
          title: '',
          text: 'Apps sowohl auf Android als auch auf IOS publishen',
          imageUrl:
            'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1192&q=80',
          alt: 'Bild von zwei Smartphones',
        },
      ],
    },
    {
      sectionTitle: 'nestjs',
      logo: '../../../../../assets/images/brand-images/logos_nestjs.svg',
      description:
        'Du weißt jetzt auch, wie man ein Backend erstellt. Damit kannst du dich selbst nun einen Fullstack-Developer nennen.',
      exampleList: [
        {
          title: '',
          text: 'Datenbanken an dein Frontend anbinden, um Daten abzuspeichern und zu analysieren',
          imageUrl:
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          alt: 'Bild einer Analyse-Webseite',
        },
        {
          title: '',
          text: 'Eigene vollwertige Webapplikationen erstellen, wie es auch die Big-Player machen',
          imageUrl: 'https://cdn.pixabay.com/photo/2015/12/11/09/30/mobile-phone-1087845_960_720.jpg',
          alt: 'Bild mit mehreren Logos bekannter Unternehmen',
        },
      ],
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
