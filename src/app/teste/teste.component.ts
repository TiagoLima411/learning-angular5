import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste',
  template: `
    <p>
      teste works!
    </p>
    <h2>Wellcome: {{name}}</h2>
    <button (click)="clickou()">Greet</button>

    <p>{{greeting}}</p>

    <button (click)="getEvent($event)">Greet</button>

    <p>{{showEvent}}</p>

    <button (click)="anotherTest='variable inserted int html'">Greet</button>

    <p>{{anotherTest}}</p>
  `,
  styles: [`

  `]
})
export class TesteComponent implements OnInit {

  public name = 'Code Evolution'
  public greeting = ''
  public showEvent = ''
  public anotherTest = ''

  constructor() { }

  ngOnInit() {
  }

  clickou() {
    this.greeting = "CodeEvolution"
    console.log("Resposta do evento click");
  }

  getEvent(event){
    this.showEvent = event.y;
    console.log(event);
  }

}
