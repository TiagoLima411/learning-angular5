import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste',
  template: `
    <div *ngFor="let color of colors; index as i">
      <h2>{{i}} {{color}}</h2>
    </div>

    <div *ngFor="let color of colors; first as f">
      <h2>{{f}} {{color}}</h2>
    </div>

    <div *ngFor="let color of colors; last as l">
      <h2>{{l}} {{color}}</h2>
    </div>

    <div *ngFor="let color of colors; even as e">
      <h2>{{e}} {{color}}</h2>
    </div>
  `,
  styles: []
})

export class TesteComponent implements OnInit {

  public colors = ["red","green","blue","blue"];

  constructor() { }

  ngOnInit() {
  }
}
