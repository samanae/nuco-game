import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  randomNumbers: number[] = [];
  evenValue: string[] = [];
  dictionary: {} = {};

  constructor() {}

  ngOnInit(): number[] {
    for (let i = 0; i < 9; i++) {
      const randomNum = Math.floor(Math.random() * 8);
      this.randomNumbers.push(randomNum);
    }
    for (let n = 0; n < 9; n++) {
      if (this.randomNumbers[n] % 2 == 0) {
      this.evenValue.push('even');
    } else {
      this.evenValue.push('odd');
    }}
    
    
    return this.randomNumbers;
  }

  createDictionary(keys: string[], values: any[]): { [key: string]: any } {
    let dictionary: { [key: string]: any } = {};
  
    for (let i = 0; i < keys.length; i++) {
      dictionary[keys[i]] = values[i];
    }
  
    console.log(this.dictionary);
  }
  


}
