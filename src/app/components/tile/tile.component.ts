import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit{

  @Input() value: number = 1;
  @Input() colorValue: string = '';

  ngOnInit() {
    if (this.value >= 100) {
      this.colorValue = 'over-hundred'
    } else if (this.value >= 80 && this.value <=1000){
      this.colorValue = 'not-quiet-hundred'
    } else if (this.value >= 50 && this.value <=79) {
      this.colorValue = 'above-fifty'
    } else if (this.value >= 30 && this.value <=49) {
      this.colorValue = 'middle'
    }  else if (this.value >= 10 && this.value <=29) {
      this.colorValue = 'teens'
    } else if (this.value >= 1 && this.value <=9) {
      this.colorValue = 'singles'
    }
  }
}
