import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div style="text-align:center">
      <h2>Welcome : {{title}}</h2>
      <h2>CodeEvolution</h2>
      <p class="text-success">CodeEvolution</p>
      <p [class]="successClass">CodeEvolution</p>
      <p class="text-special" [class]="successClass">CodeEvolution</p>
      <p [class.text-danger]="hasError">CodeEvolution</p>
      <p [ngClass]="messageClasses">CodeEvolution</p>
    </div>
    `,
  styles: [`
    .text-success{
      color: green;
    }
    .text-danger{
      color: red;
    }
    .text-special{
      font-style: italic;
    }
  `]
})
export class AppComponent {
  title = 'app';
  public myid = 'myIdPropert';
  public successClass = "text-success";
  public hasError = false;

  public isSpecial = true;
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }
}
