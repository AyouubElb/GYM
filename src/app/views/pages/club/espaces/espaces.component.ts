import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos' ;

@Component({
  selector: 'app-espaces',
  templateUrl: './espaces.component.html',
  styleUrls: ['./espaces.component.css']
})
export class EspacesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    AOS.init({
      duration: 700,
      easing: 'ease-in-out-sine'
    }) ;
  }

  toActivities(){
    this.router.navigate(['club/activite']);
  }

}
