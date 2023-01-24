import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos' ;

@Component({
  selector: 'app-body-step',
  templateUrl: './body-step.component.html',
  styleUrls: ['./body-step.component.css']
})
export class BodyStepComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init({
      duration: 700,
      easing: 'ease-in-out-sine'
    }) ;
  }

}
