import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nuco';
  
  currentPage: 'home' | 'tabletop' = 'home';

  goTo(page: 'home' | 'tabletop') {
    this.currentPage = page;
  }
}
