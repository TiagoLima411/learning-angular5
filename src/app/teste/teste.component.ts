import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste',
  template: `
    <div [ngSwitch]="color">
      <div *ngSwitchCase="'red'"> you picked red color</div>
      <div *ngSwitchCase="'blue'">you picked blue color</div>
      <div *ngSwitchCase="'black'">you picked black color</div>
    </div>
  `,
  styles: [``]
})

export class TesteComponent implements OnInit {

  public color = "red";

  constructor() { }

  ngOnInit() {
  }
}
