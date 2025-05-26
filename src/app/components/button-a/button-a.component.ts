import { Component, Input } from '@angular/core';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-button-a',
  templateUrl: './button-a.component.html',
  styleUrls: ['./button-a.component.scss']
})
export class ButtonAComponent {
@Input() buttonText = '';
@Input() buttonLink = '';
@Input() secondaryButton = false;

 @Input() targetPage: 'home' | 'tabletop' = 'home'; // To specify which page to navigate to

  constructor(private pageService: PageService) {}

  onClick(event: Event) {
    event.preventDefault(); // Prevent default anchor behavior
    this.pageService.navigateTo(this.targetPage);
  }

}
