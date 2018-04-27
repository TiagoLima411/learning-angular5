import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//do not forget to declare in import

@Component({
  selector: 'app-teste',
  template: `
    <!-- <h2>{{"Hello " + parentData}}</h2> -->
    <h2>{{"Hello " + name}}</h2>

    <!-- send event via button -->
    <button (click)="fireEvent()">Send Event</button>
  `,
  styles: []
})

export class TesteComponent implements OnInit {
  //two way to use this case from parent to child
  //@Input() public parentData;
  @Input('parentData') public name;

  //Sending data from child to parent
  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  //method to fire event
  fireEvent(){
    this.childEvent.emit('Hey CodeEvolution');
  }
}
