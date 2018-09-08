import { Component, OnInit } from '@angular/core';
import { trigger,state,transition,style,animate } from '@angular/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations:[
    trigger('myAnimation',[
      state('smaller',style({
        transform:'scale(1)',
      })),
      state('larger',style({
        transform:'scale(3)',
      })),
      transition('smaller <=> larger', animate('300ms ease-in'))
    ])
  ]
})
export class ContactComponent implements OnInit {

  state:string='smaller';
  
  animate(){
    this.state = this.state =='larger' ? 'smaller' : 'larger';
  }

  constructor() { }

  ngOnInit() {
  }

}
