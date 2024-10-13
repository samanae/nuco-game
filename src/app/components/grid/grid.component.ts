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

  drop(event: CdkDragDrop<number[]>): void {
    const prevIndex = event.previousIndex;
    const currIndex = event.currentIndex;

    const prevValue = this.randomNumbers[prevIndex];
    const currValue = this.randomNumbers[currIndex];
    const newValue = prevValue + currValue;

    // Determine the row of the current index
    this.randomNumbers[prevIndex] = newValue;
    this.randomNumbers[currIndex] = newValue;
    }

}
