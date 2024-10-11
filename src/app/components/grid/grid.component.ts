import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  randomNumbers: number[] = [];

  constructor() {}

  ngOnInit(): number[] {
     let numbers: number[] = [];
    for (let i = 0; i < 9; i++) {
      const randomNum = Math.floor(Math.random() * 8);
      this.randomNumbers.push(randomNum);
    }
    console.log(this.randomNumbers)
    return this.randomNumbers;
  }


}
