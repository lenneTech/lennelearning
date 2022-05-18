import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'academy-picture',
  templateUrl: './academy-picture.component.html',
  styleUrls: ['./academy-picture.component.scss'],
})
export class AcademyPictureComponent implements OnInit {
  @Input() image: string;
  @Input() alt: string;
  @Input() imgClass: string;
  @Input() reference: string;
  webpImage: string;
  imageType: string;

  ngOnInit() {
    switch (this.image.slice(this.image.lastIndexOf('.') + 1)) {
      case 'png':
        this.imageType = 'image/png';
        this.webpImage = this.image.replace('.png', '.webp');
        break;
      case 'jpg':
        this.imageType = 'image/jpeg';
        this.webpImage = this.image.replace('.jpg', '.webp');
        break;

      default:
        break;
    }
  }

  changeSource() {
    this.webpImage = this.image;
  }
}
