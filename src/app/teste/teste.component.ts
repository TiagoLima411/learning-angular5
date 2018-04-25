import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste',
  template: `
    <input [(ngModel)]="name" type="text">
    {{name}}
  `,
  styles: [`

  `]
})
export class TesteComponent implements OnInit {

  public name = "";

  constructor() { }

  ngOnInit() {
  }
}
