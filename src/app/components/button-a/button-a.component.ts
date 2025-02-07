import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-a',
  templateUrl: './button-a.component.html',
  styleUrls: ['./button-a.component.scss']
})
export class ButtonAComponent {
@Input() buttonText = '';
@Input() buttonLink = '';
@Input() secondaryButton = false;
}
