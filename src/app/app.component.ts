import { Component } from '@angular/core';
import {DataService} from './modules/core/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private dateService: DataService) {
    this.dateService.getBlog(2);
  }
}
