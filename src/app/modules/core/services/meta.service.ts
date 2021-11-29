import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MetaService {
  constructor(private metaTagService: Meta) {}

  updateMetaTags(title: string, description: string): void {
    this.metaTagService.updateTag({
      name: 'title',
      content: title,
    });
    this.metaTagService.updateTag({
      property: 'og:title',
      content: title,
    });
    this.metaTagService.updateTag({
      property: 'twitter:title',
      content: title,
    });
    this.metaTagService.updateTag({
      name: 'description',
      content: description,
    });
    this.metaTagService.updateTag({
      property: 'og:description',
      content: description,
    });
    this.metaTagService.updateTag({
      property: 'twitter:description',
      content: description,
    });
    this.metaTagService.updateTag({
      property: 'og:type',
      content: 'website',
    });
    this.metaTagService.updateTag({
      property: 'twitter:card',
      content: 'summary_large_image',
    });
    this.metaTagService.updateTag({
      property: 'og:image',
      content: environment.appUrl + 'assets/images/banner-images/ltakademie.png',
    });
    this.metaTagService.updateTag({
      property: 'twitter:image',
      content: environment.appUrl + 'assets/images/banner-images/ltakademie.png',
    });
    this.metaTagService.updateTag({
      property: 'og:url',
      content: environment.appUrl,
    });
    this.metaTagService.updateTag({
      property: 'twitter:url',
      content: environment.appUrl,
    });
  }
}
