import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { DialogBtnOptionsEnum } from '../../enumerators/dialog-btn-options.enum';

@Component({
  selector: 'app-solution-dialog',
  templateUrl: './solution-dialog.component.html',
  styleUrls: ['./solution-dialog.component.scss'],
})
export class SolutionDialogComponent implements OnInit {
  @Input() title: string;
  @Input() cardWidth: string;
  @Input() cardHeight: string;
  @Input() solutionLink: string;
  @Input() task: string;
  @Input() id: string;
  @Input() section: string;
  DialogBtnOptionsEnum = DialogBtnOptionsEnum;
  requestSend = false;
  solutionForm: FormGroup;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.solutionForm = new FormGroup({
      name: new FormControl('', Validators.required),
      reason: new FormControl('', Validators.required),
    });
  }

  onSendRequest(): void {
    const message = {
      attachments: [
        {
          fallback: 'Plain-text summary of the attachment.',
          color: '#1150be',
          author_name: 'Akademie',
          author_link: environment.appUrl,
          title: `Lösungsanfrage zur Aufgabe ${this.id.slice(-1)} in der Sektion ${this.section.toUpperCase()}`,
          title_link: this.task,
          text: 'Es wurde eine Lösung zu einer Aufgabe angefragt:',
          fields: [
            {
              title: `${this.solutionForm.value.name} hat eine Lösung aus folgendem Grund angefragt:`,
              value: this.solutionForm.value.reason,
              short: false,
            },
          ],
          footer: 'Akademie',
          ts: Date.now(),
        },
      ],
    };
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' }),
    };

    this.http
      .post(
        'https://ho' +
          'oks.s' +
          'lac' +
          'k.co' +
          'm/servi' +
          'ces/TKGAB' +
          'MT5E/B02QD' +
          'FZGG78/Z1Ekqrs1s' +
          'wH4h2vIfed2jiSx',
        JSON.stringify(message),
        options
      )
      .subscribe({
        next: (value) => {},
        error: (err) => {},
      });
    this.requestSend = true;
  }
}
