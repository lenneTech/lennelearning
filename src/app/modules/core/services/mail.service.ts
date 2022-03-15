import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MailService {
  constructor(private httpClient: HttpClient) {}

  sendMail(input): Observable<boolean> {
    return new Observable<boolean>((subscriber) => {
      //currently not working because there is no api yet
      this.httpClient.post('/api/send/mail', input).subscribe({
        next: (response: any) => {
          if (response?.status === 'success') {
            subscriber.next(true);
            subscriber.complete();
          } else {
            subscriber.next(false);
            subscriber.complete();
          }
        },
        error: (e) => {
          subscriber.error(e);
          subscriber.complete();
        },
      });
    });
  }
}
