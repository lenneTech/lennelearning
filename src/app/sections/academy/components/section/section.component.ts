import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { SEOService } from '@lenne.tech/ng-base';
import { SectionService } from '../../../../modules/core/services/section.service';

@Component({
  selector: 'section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent implements OnInit, AfterViewInit {
  @ViewChild('section') sectionRef: ElementRef;

  @Input() pageTitle: string;
  @Input() seoTitle: string;
  @Input() seoDescription: string;
  @Input() seoKeywords: string;

  constructor(private seoService: SEOService, private sectionService: SectionService) {}

  ngOnInit(): void {
    this.seoService.initPageForSEO(this.seoTitle, this.seoDescription, this.seoKeywords);
  }

  ngAfterViewInit(): void {
    this.sectionService.initSection(this.sectionRef);
  }
}
