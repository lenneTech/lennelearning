import { Component, Input } from '@angular/core';

@Component({
  selector: 'task-video',
  templateUrl: './task-video.component.html',
  styleUrls: ['./task-video.component.scss'],
})
export class TaskVideoComponent {
  @Input() link?: string;
  @Input() youtubelink?: string;
  @Input() videoPreview?: string;

  constructor() {}
}
