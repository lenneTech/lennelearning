import { Component, EventEmitter, NgZone, OnDestroy, Output } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions, BMCompleteLoopEvent } from 'ngx-lottie';

@Component({
  selector: 'app-trophy',
  template: `<div
    class="banner"
    lottie
    [options]="options"
    (animationCreated)="animationCreated($event)"
    (loopComplete)="onLoopComplete()"
  ></div>`,
  styleUrls: ['./trophy.component.scss'],
})
export class TrophyComponent {
  @Output() loopComplete = new EventEmitter<boolean>();
  animationItem: AnimationItem;
  options: AnimationOptions = {
    path: '../../../../../assets/images/milestone-images/Trophy.json',
    loop: true,
  };

  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
  }

  onLoopComplete(): void {
    this.loopComplete.emit(true);
    this.animationItem.destroy();
  }
}
