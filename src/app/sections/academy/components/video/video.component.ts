import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'task-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit {
  @Input() link: string;
  constructor() {}

  ngOnInit(): void {
    console.log(this.link);
  }
}
