import { Component, OnInit } from '@angular/core';
import { EntryPointService } from '../../modules/core/services/entry-point.service';
import { EntryPoint } from '../../modules/core/interfaces/entry-point.interface';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent implements OnInit {
  entryPoints: EntryPoint[] = [];

  constructor(private entryPointService: EntryPointService) {}

  ngOnInit(): void {
    this.getAllEntryPoints();
  }

  getAllEntryPoints() {
    this.entryPoints = this.entryPointService.entryPoints();
  }
}
