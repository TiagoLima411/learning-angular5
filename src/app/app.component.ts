import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div style="text-align:center">
      <h2>Welcome : {{title}}</h2>
      <input [id]="myid" placeholder="type input" value="Value of input">
      <input id={{myid}} placeholder="type input" value="Value of input">
      <input [disabled]="isDisable" placeholder="type input" value="Value of input">
      <input bind-disabled="isDisable" placeholder="type input" value="Value of input">
    </div>
    `,
  styles: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public myid = 'myIdPropert';
  public isDisable = true;
}
