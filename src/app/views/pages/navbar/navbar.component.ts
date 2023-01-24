import { Component, OnInit } from '@angular/core';
import { trigger,state,style,animate,transition} from '@angular/animations';
import * as AOS from 'aos' ;
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('navbar', [
      state('start', style({
      backgroundColor: '#97ef26'
      })),
      state('after', style({
        backgroundColor: 'white'
        })),
        transition('start <=> after', [
          animate('1s ease-in-out')
        ]),
    ])
  ]
})

export class NavbarComponent implements OnInit {
 isStart:boolean ;
  constructor(private router:Router) {
    this.isStart=true ;
   }

  ngOnInit(): void {
  }

  toSignUp(){
     this.router.navigate(['signUp']);
  }

}
