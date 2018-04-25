import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste',
  template: `
    <input #myInput type="text">
    <button (click)="pegaValor(myInput)">Log</button>
    <p>{{value}}</p>
  `,
  styles: [`

  `]
})
export class TesteComponent implements OnInit {

  public value;

  constructor() { }

  ngOnInit() {
  }

  clickou() {
    console.log("Resposta do evento click");
  }

  getEvent(event){
    console.log(event);
  }

  pegaValor(value){
    this.value = value;
    console.log(this.value);
  }

}
