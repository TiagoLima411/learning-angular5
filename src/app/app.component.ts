import { Component, style } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div style="text-align:center">
      <h2>Welcome : {{title}}</h2>
      <h2>CodeEvolution</h2>

      <h2 [style.color]="hasError ? 'red' : 'green'">Style Binding</h2>
      <h2 [style.color]="hightlightColor">Style Binding</h2>
      <h2 [ngStyle]="titleStyles">Style Binding</h2>
    </div>
    `,
  styles: [`

  `]
})
export class AppComponent {

  title = 'app';
  public hasError = false;
  public isSpecial = true;
  public hightlightColor = "orange";
  public titleStyles = {
    color: "blue",
    fontStyle: "italic"
  }

}
