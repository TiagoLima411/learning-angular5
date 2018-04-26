import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste',
  template: `
    <h2 *ngIf="display; then thenBlock; else elseBlock">
      Code Evolution
    </h2>

    <ng-template #thenBlock>
      <h2>
        Code evolution
      </h2>
    </ng-template>

    <ng-template #elseBlock>
      <h2>
        Name is hidden
      </h2>
    </ng-template>
  `,
  styles: [`

  `]
})
export class TesteComponent implements OnInit {

  display = true;

  constructor() { }

  ngOnInit() {
  }

}
