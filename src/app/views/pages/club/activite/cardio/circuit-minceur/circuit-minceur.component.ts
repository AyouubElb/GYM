import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos' ;

@Component({
  selector: 'app-circuit-minceur',
  templateUrl: './circuit-minceur.component.html',
  styleUrls: ['./circuit-minceur.component.css']
})
export class CircuitMinceurComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init({
      duration: 700,
      easing: 'ease-in-out-sine'
    }) ;
  }

}
