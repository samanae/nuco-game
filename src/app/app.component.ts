import { Component } from '@angular/core';
import { PageService } from './services/page.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nuco';

  constructor(public pageService: PageService) {}
  
  currentPage: 'home' | 'tabletop' = 'tabletop'; 
  showHome() {
    this.currentPage = 'home';
  }

  showTabletop() {
    this.currentPage = 'tabletop';
  }

}
