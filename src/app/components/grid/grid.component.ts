import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  randomNumbers: number[] = [];
  evenValue: string[] = [];

  constructor() {}

  ngOnInit(): void {
    for (let i = 0; i < 9; i++) {
      const randomNum = Math.floor(Math.random() * 8);
      this.randomNumbers.push(randomNum);
    }
    for (let n = 0; n < 9; n++) {
      if (this.randomNumbers[n] % 2 == 0) {
      this.evenValue.push('even');
    } else  {
      this.evenValue.push('odd');
    }}
    console.log(this.evenValue);
  }

  sumValue: number = 0;

  drop(event: CdkDragDrop<number[]>): void {
    var prevIndex = event.previousIndex;
    var currIndex = event.currentIndex +1;

    var prevValue = this.randomNumbers[prevIndex];
    var currValue = this.randomNumbers[currIndex +1];
    this.sumValue = prevValue + currValue;

    console.log('Dragged Tile Index:', prevIndex);
    console.log('Dragged Tile Value:', prevValue);
    console.log('Dropped Tile Index:', currIndex);
    console.log('Dropped Tile Value:', currValue);

    // Prevent the tiles from moving
    // event.item.reset();

    this.randomNumbers[prevIndex] = this.sumValue;
    this.randomNumbers[currIndex] = this.sumValue;

    var prevIndex = 0;
    var currIndex = 0;
  }


}
