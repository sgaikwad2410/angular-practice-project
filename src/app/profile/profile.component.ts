import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  myDetails = [
    {
      academic:'School-10th STD',
      university:'Amaravati Board',
      grade:'First Class With Distinction'
    },
    {
      academic:'Diploma in Engineering',
      university:'MSBTE-Mumbai',
      grade:'First Class With Distinction'
    },
    {
      academic:'Graduation in IT',
      university:'University of Pune',
      grade:'First Class With Distinction'
    },
    {
      academic:'Post Graduation in CSE',
      university:'University of Pune',
      grade:'First Class With Distinction'
    }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
