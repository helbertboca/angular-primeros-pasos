import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template:  `
    <h3>Counter: {{counter}}</h3>

    <button (click)="increaseBy(1)">+1</button>
    <button (click)="reset(10)">Reset</button>
    <button (click)="inDecrementBy(1)">-1</button>

  `
})
export class CounterComponent {
  constructor() { }

  public counter:  number = 10;

  public increaseBy(value : number): void{
    this.counter +=value;
  }

  public inDecrementBy(value : number): void{
    this.counter -=value;
  }

  public reset(value : number): void{
    this.counter =value;
  }
}


