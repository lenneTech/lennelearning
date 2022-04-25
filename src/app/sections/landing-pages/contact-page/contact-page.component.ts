import { Component } from '@angular/core';
import { MetaService } from 'src/app/modules/core/services/meta.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent {
  title = 'Kontakt';
  subtitle =
    'Du hast eine Frage zu unseren Angeboten? Du möchtest einen Gesprächstermin vereinbaren oder Dich für ein Praktikum bewerben? \n\n  Schick uns eine Nachricht oder ruf uns an. Wir helfen Dir gerne weiter. \n \n Auch Anmerkungen oder Ergänzungswünsche zum Inhalt der Akademie sind bei uns immer willkommen!';
  imageUrl = '../../assets/images/academy-images/letter.svg';
  contactType = {
    company: 'lenne.Tech GmbH',
    street: 'Hagener Str. 64',
    postcode: '57368',
    city: 'Lennestadt',
    phone: '+49 (0)2723 - 928 93 0',
    email: 'lenne.learning@lenne.tech',
    namePlaceholder: 'Name *',
    emailPlaceholder: 'E-Mail-Adresse *',
    msgPlaceholder: 'Nachricht *',
    subjectPlaceholder: 'Wie können wir Dir helfen?',
    dataPolicy:
      "Ich habe die <a class='data-policy-link' href='/datenschutz' target='_blank'>Datenschutzerklärung</a> zur Kenntnis genommen. Ich stimme zu, dass meine Angaben und Daten zur Beantwortung meiner Anfrage elektronisch erhoben und gespeichert werden. Hinweis: Du kannst Deine Einwilligung jederzeit für die Zukunft per E-Mail an <a class='data-policy-link' href='mailto:info@lenne.tech'>info@lenne.tech</a> widerrufen. *",
    buttonText: 'Senden',
    requiredMsg: 'Dieses Feld ist ein Pflichtfeld!',
  };
  constructor(private metaService: MetaService) {}

  ngOnInit(): void {
    this.metaService.updateMetaTags(
      'Kontakt - Du interessierst Dich für App- und Webentwicklung?',
      'Du hast Fragen zum Angebot von lenne.Learning? Du möchtest einen Gesprächstermin vereinbaren oder Dich für ein Praktikum bewerben? Wir helfen Dir gerne weiter.',
      'academy, online, akademie, web, kontakt, Adresse, Kontaktformular, Lennestadt'
    );
  }
}
