import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class MetaService {
  constructor(private metaTagService: Meta) {}

  updateMetaTags(title: string, description: string, image: string, url: string): void {
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
      content: image,
    });
    this.metaTagService.updateTag({
      property: 'twitter:image',
      content: image,
    });
    this.metaTagService.updateTag({
      property: 'og:url',
      content: url,
    });
    this.metaTagService.updateTag({
      property: 'twitter:url',
      content: url,
    });
  }
}
