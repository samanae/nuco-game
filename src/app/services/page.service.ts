import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  currentPage: 'home' | 'tabletop' = 'home'; // Default to 'home' on app start

  navigateTo(page: 'home' | 'tabletop') {
    this.currentPage = page;
  }

  constructor() { }
}
