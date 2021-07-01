import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { SectionService } from '../services/section.service';

@Injectable({
  providedIn: 'root',
})
export class SectionGuard implements CanActivate {
  constructor(private sectionService: SectionService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.sectionService.setCurrentSection(route.routeConfig.path);
  }
}
