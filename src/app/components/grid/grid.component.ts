import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  randomNumbers: number[] = [];
  evenValue: string[] = [];

  timePassed: number = 0;
  interval: any;
  score: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.initializeRandomNumbers();
    this.startTimer();
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  initializeRandomNumbers(): void {
    this.randomNumbers = []; // clear the array when restarting
    for (let i = 0; i < 9; i++) {
      const randomNum = Math.floor(Math.random() * 10) + 90;
        this.randomNumbers.push(randomNum);
        this.score = this.score + randomNum;
    }
    for (let n = 0; n < 9; n++) {
      if (this.randomNumbers[n] % 2 == 0) {
      this.evenValue.push('even');
    } else  {
      this.evenValue.push('odd');
    }}
    console.log(this.evenValue);
  }

  startTimer(): void {
    this.interval = setInterval(() => {
      this.timePassed++;}, 1000
    )
  }

  endGame(message: string): void {
    clearInterval(this.interval);
    alert(message);
  }

  resetGame(): void {
    clearInterval(this.interval);
    this.initializeRandomNumbers();
    this.startTimer;
  }

  sumValue: number = 0;

  drop(event: CdkDragDrop<number[]>): void {
    var prevIndex = event.previousIndex;
    var currIndex = this.calculateDropIndex(event);

    var prevValue = this.randomNumbers[prevIndex];
    var currValue = this.randomNumbers[currIndex];
    this.sumValue = prevValue + currValue;

    if (prevValue < currValue) {
      this.sumValue = currValue - prevValue;
    } else {
      this.sumValue = prevValue + currValue;
    }

    console.log('Dragged Tile Index:', prevIndex);
    console.log('Dragged Tile Value:', prevValue);
    console.log('Dropped Tile Index:', currIndex);
    console.log('Dropped Tile Value:', currValue);

    // Prevent the tiles from moving
    event.item.reset();

    this.randomNumbers[prevIndex] = this.sumValue;
    this.randomNumbers[currIndex] = this.sumValue;

    this.score = this.randomNumbers.reduce((sum, value) => sum + value, 0);
    if (this.score === 9) {
      this.endGame('Congratulations! You cleared all tiles!')
    }
  }

  calculateDropIndex(event: CdkDragDrop<number[]>): number {
    var dropPoint = event.dropPoint;
    var gridElement = event.container.element.nativeElement;
    var gridRect = gridElement.getBoundingClientRect();

    var row = Math.floor((dropPoint.y - gridRect.top) / (gridRect.height / 3));
    var col = Math.floor((dropPoint.x - gridRect.left) / (gridRect.width / 3));

    return row * 3 + col;
  }



}
