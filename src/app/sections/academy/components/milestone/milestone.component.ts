import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbStepperComponent } from '@nebular/theme';
import { Milestone } from 'src/app/modules/core/interfaces/milestone.interface';
import { SectionService } from 'src/app/modules/core/services/section.service';
import { EntryPointService } from '../../../../modules/core/services/entry-point.service';

@Component({
  selector: 'app-milestone',
  templateUrl: './milestone.component.html',
  styleUrls: ['./milestone.component.scss'],
})
export class MilestoneComponent implements OnInit {
  id: string;
  mileStoneSection: Milestone = {};
  @ViewChild('content') content: ElementRef;
  @ViewChild('stepper') stepper: NbStepperComponent;
  milestones: Milestone[] = [
    {
      sectionTitle: 'beruf',
      logo: '../../../../../assets/images/explanation-images/strategy.svg',
      description:
        'Du hast den Beruf des Webentwicklers nun schon einmal kennengelernt. Jetzt ist es an der Zeit, Dir die einzelnen Fertigkeiten anzueignen.',
      exampleList: [
        {
          text: 'Du hast den Alltag von Softwareentwicklern kennengelernt und kannst Dir vorstellen, was ein Softwareentwickler für Aufgaben hat.',
        },
        {
          text: 'Du hast gelernt, wie man ein Softwareentwickler wird, mit welchen Gehältern man durchschnittlich rechnen kann und in welchen Branchen Du später tätig sein kannst.',
        },
        {
          text: 'Du hast die Softwareentwicklung im App und Web Bereich kennengelernt und hast verstanden, was Frontend, Backend und Full Stack sind.',
        },
      ],
    },
    {
      sectionTitle: 'html',
      logo: '../../../../../assets/images/brand-images/logos_html-5.svg',
      description:
        'Super, Du hast HTML verstanden und kannst jetzt schon eigene kleine Webseiten erstellen. In der nächsten Sektion geht es weiter mit dem Styling Deiner Webseite.',
      exampleList: [
        { text: 'Webseiten erstellen und die Grundstruktur fürs Layout und Styling vorgeben.' },
        {
          text: 'Die im Browser eingebauten Entwicklertools nutzen, um den Aufbau einer Seite zu verstehen und andere Webseiten zu analysieren.',
        },
      ],
    },
    {
      sectionTitle: 'css',
      logo: '../../../../../assets/images/brand-images/logos_css-3.svg',
      description:
        'Klasse Leistung! Mit dieser Sektion bist Du Deiner eigenen wunderschönen Webseite ein Stück näher gekommen.',
      exampleList: [
        {
          text: 'Du kannst jetzt HTML Elemente stylen und somit Webseiten nach Deinen Wünschen gestalten.',
          imageUrl: '../../../../../assets/images/milestone-images/css-1.png',
          imageAlt: 'Bild einer Webseite',
          reference: 'https://emporiumpies.com/',
        },
      ],
    },
    {
      sectionTitle: 'bootstrap',
      logo: '../../../../../assets/images/brand-images/logos_bootstrap.svg',
      description:
        'Jetzt hast Du eine Möglichkeit kennengelernt, eines der meist genutzten CSS-Frameworks zu verwenden, dass Dir viel Arbeit beim Stylen abnehmen kann.',
      exampleList: [
        {
          text: 'Eigenschaften von Bootstrap überschreiben und für Deine Webseite anpassen.',
          imageUrl: '../../../../../assets/images/milestone-images/Bootstrap-1.png',
          imageAlt: 'Bild einer Webseite',
          reference: 'https://calenodrinks.com/',
        },
        {
          text: 'Mithilfe von Bootstrap Klassen Deinen Webseiten in kurzer Zeit einen professionellen Look geben.',
          imageUrl: '../../../../../assets/images/milestone-images/Bootstrap-2.png',
          imageAlt: 'Bild einer Website',
          reference: 'https://wildlifecoexistence.org/',
        },
      ],
    },
    {
      sectionTitle: 'git-basics',
      logo: '../../../../../assets/images/brand-images/logos_git.svg',
      description:
        'Du hast nun die Grundlagen von Git kennengelernt. Grundlegende Versionsverwaltung ist für Dich kein Problem mehr und Du bist in der Lage, Deine Projekte remote abzusichern.',
      exampleList: [
        {
          text: 'Mithilfe von Commits kannst Du neuen Code strukturiert in Dein Projekt Repository pushen.',
        },
        {
          text: 'Du kannst von jedem Rechner aus an Deinem Code weiterarbeiten, da Du jeder Zeit Dein Projekt klonen und Änderungen vornehmen kannst.',
        },
        {
          text: 'Wenn Du mal Probleme hast, kannst Du nun einfach Dein GitHub Repository an andere Softwareentwickler weitergeben, die Dir helfen können.',
        },
      ],
    },
    {
      sectionTitle: 'javascript',
      logo: '../../../../../assets/images/brand-images/logos_javascript.svg',
      description:
        'Super Leistung! Jetzt kannst Du mit HTML, CSS, Bootstrap und Javascript Deine eigene Webseite mit Styling und Funktionalität entwickeln. Damit hast Du bereits die wichtigsten Bausteine der Webentwicklung kennengelernt.',
      exampleList: [
        {
          text: 'Webseiten für Probleme aller Art entwickeln.',
          imageUrl:
            'https://images.unsplash.com/photo-1527427337751-fdca2f128ce5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          imageAlt: 'Bild von Programmcode',
        },
        {
          title: '',
          text: 'Deine eigenen Ideen umsetzen, Prototypen entwickeln oder schon vollständige Webprojekte fürs Frontend umsetzen.',
          imageUrl: '../../../../../assets/images/milestone-images/Javascript-1.png',
          imageAlt: 'Bild von Amazon',
          reference: 'https://www.amazon.de/',
        },
      ],
    },
    {
      sectionTitle: 'typescript',
      logo: '../../../../../assets/images/brand-images/logos_typescript-icon.svg',
      description:
        'Du hast jetzt eine Erweiterung von Javascript kennengelernt, die Dir unter anderem mit Typisierungen das Leben erleichtern soll und strukturierteres Coden ermöglicht.',
      exampleList: [
        {
          text: 'Mithilfe von Typescript hast Du die Grundlage für moderne Webframeworks wie Angular gelernt und kannst nun voll durchstarten.',
        },
      ],
    },
    {
      sectionTitle: 'teamwork',
      logo: '../../../../../assets/images/brand-images/logos_github-icon.svg',
      description:
        'Sehr gut! Du hast jetzt die volle Kontrolle über Deinen Code und kannst kooperativ mit anderen Softwareentwicklern zusammenarbeiten.',
      exampleList: [
        {
          text: 'Du kannst nun für verschiedene Aufgaben Branches auschecken und somit separiert an Deinen Projektaufgaben arbeiten.',
        },
        {
          text: 'Mithilfe von Pull Requests kannst Du Deine Änderungen am Code kontrollieren und in den Main Branch eingliedern lassen.',
        },
        {
          text: 'Mithilfe von Rebases kannst Du Deine Branches aktuell halten und gegebenenfalls Merge Konflikte lösen.',
        },
      ],
    },
    {
      sectionTitle: 'prototyping',
      logo: '../../../../../assets/images/brand-images/logos_figma.svg',
      description: 'Bravo, Du hast die Sektion Prototyping erfolgreich beendet.',
      exampleList: [
        {
          text: 'Du kannst nun mit nur wenigen Klicks und einer guten Idee eine Personengruppe mit einem Prototypen überzeugen.',
        },
        {
          text: 'Du hast die Möglichkeit, schnell Feedback von vielen Personen zu bekommen, allein durch diesen Prototypen.',
        },
      ],
    },
    {
      sectionTitle: 'arbeitsmethoden',
      description: 'Bravo, Du hast die Sektion Arbeitsmethoden erfolgreich beendet.',
      exampleList: [
        {
          text: 'Nun kennst Du einige Arbeitsmethoden mit denen Du Projekte bearbeiten kannst.',
        },
      ],
    },
    {
      sectionTitle: 'angular',
      logo: '../../../../../assets/images/brand-images/logos_angular-icon.svg',
      description:
        'Du bist jetzt ein zertifizierter Angularentwickler und kannst agile Single Page Anwendungen entwickeln.',
      exampleList: [
        {
          text: 'Dynamische Webseiten mit mehreren Pages, Routing, Animationen und vielem mehr erstellen.',
          imageUrl: '../../../../../assets/images/milestone-images/Angular-1.png',
          imageAlt: 'Bild einer Webseite',
          reference: 'https://messages.google.com/',
        },
        {
          text: 'Erstellung von modernen Layouts, Formularen sowie Validierungen, um alles rund ums Frontend abzudecken.',
          imageUrl: '../../../../../assets/images/milestone-images/Angular-2.png',
          imageAlt: 'Bild einer Webseite',
          reference: 'https://de.delta.com/eu/de',
        },
        {
          text: 'Du hast eins der meist gefragten Frontend Frameworks erlernt und kannst als Frontend Entwickler in Unternehmen arbeiten.',
        },
      ],
    },
    {
      sectionTitle: 'ionic',
      logo: '../../../../../assets/images/brand-images/logos_ionic-icon.svg',
      description:
        'Der Appentwicklung steht nun nichts mehr im Wege. Den Bereich Frontend hast Du nun komplett abgeschlossen. Das Einzige, was Dir jetzt noch fehlt, ist das Backend.',
      exampleList: [
        {
          text: 'Du kannst Apps designen und funktional gestalten.',
          imageUrl:
            'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
          imageAlt: 'Bilder einer App',
        },
        {
          text: 'Du kannst native Funktionen von Smartphones nutzen, um zum Beispiel Kamera-, Audio- oder GPS-Sensoren einzubinden.',
        },
        {
          text: 'Du hast gelernt, wie man Apps hybrid entwickelt und sowohl für Android als auch für IOS konzipiert.',
          imageUrl:
            'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1192&q=80',
          imageAlt: 'Bild von zwei Smartphones',
        },
      ],
    },
    {
      sectionTitle: 'docker-basics',
      logo: '../../../../../assets/images/brand-images/logos_docker.svg',
      description:
        'Jetzt hast Du Docker kennengelernt. Du weißt jetzt zum Beispiel, was Container und Images sind. Das reicht erst mal für die nächsten Sektionen. Der Expertenteil folgt.',
    },
    {
      sectionTitle: 'nestjs',
      logo: '../../../../../assets/images/brand-images/logos_nestjs.svg',
      description:
        'Du weißt jetzt auch, wie man ein Backend mit einer Datenbank und Endpunkten erstellt. Damit kannst Du Dich selbst nun einen Fullstack-Developer nennen.',
      exampleList: [
        {
          text: 'Du kannst jetzt Datenbanken an Dein Frontend anbinden, um Daten abzuspeichern und zu analysieren.',
          imageUrl:
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          imageAlt: 'Bild einer Analyse-Webseite',
        },
        {
          text: 'Du hast gelernt, wie man moderne vollwertige Webapplikationen mit eigener Serverarchitektur wie die Big Player      entwickelt.',
          imageUrl: 'https://cdn.pixabay.com/photo/2015/12/11/09/30/mobile-phone-1087845_960_720.jpg',
          imageAlt: 'Bild mit mehreren Logos bekannter Unternehmen',
        },
      ],
    },
    {
      sectionTitle: 'packages',
      logo: '../../../../../assets/images/brand-images/logos_npm.svg',
      description:
        'Jetzt weißt Du Bescheid, nach welchen Kriterien man Packages auswählen sollte und kannst zukünftig in Deinen Projekten bedachter Pakete einbinden.',
    },
    {
      sectionTitle: 'design',
      logo: '../../../../../assets/images/brand-images/logos_figma.svg',
      description:
        'Jetzt hast Du gelernt, wie man designtechnisch an ein Projekt herangeht. Mit Figma oder anderen Tools kannst Du Deine Webseite also nun schon vorab designen.',
    },
    {
      sectionTitle: 'automatisierte-tests',
      logo: '../../../../../assets/images/brand-images/logos_cypress.svg',
      description:
        'Du weißt jetzt, wie automatisierte Tests funktionierten und kannst testen, ob das eigene System noch vollständig funktionsfähig ist.',
    },
  ];
  currentIndex = 0;
  nextSection;

  constructor(
    private sectionService: SectionService,
    private router: Router,
    private route: ActivatedRoute,
    private entryPointService: EntryPointService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.setMileStoneContent();
    this.nextSection = this.entryPointService.getNextSectionByEntryPoint();
  }

  setMileStoneContent() {
    this.milestones.find((section) => {
      if (section.sectionTitle === this.id) {
        this.mileStoneSection = section;
      }
    });
  }

  nextStep() {
    this.stepper.next();
    this.currentIndex++;
  }

  prevStep() {
    this.stepper.previous();
    this.currentIndex--;
  }

  checkPrev() {
    return this.currentIndex > 0;
  }

  checkNext() {
    if (this.stepper) {
      return this.currentIndex < this.stepper.steps.length - 1;
    }
  }

  check() {
    if (this.stepper) {
      this.content.nativeElement.classList.add('noblur');
    }
  }

  navigateToNextSection() {
    this.router.navigate([`/lernpfad/${this.nextSection}`]);
  }
}
