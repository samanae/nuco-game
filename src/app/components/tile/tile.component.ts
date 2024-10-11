import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit{

  @Input() value: number = 1;
  @Input() evenOrOdd: string = '';

  ngOnInit() {
    if (this.value % 2 == 0) {
      this.evenOrOdd = 'even'
    } else {
      this.evenOrOdd = 'odd'
    }
  }

}
