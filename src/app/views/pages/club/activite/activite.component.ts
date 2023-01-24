import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activite',
  templateUrl: './activite.component.html',
  styleUrls: ['./activite.component.css']
})
export class ActiviteComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toCircuitMinceur(){
    this.router.navigate(['club/activite/cardio/circuit-minceur']);
  }

  toBodyStep(){
    this.router.navigate(['club/activite/cardio/body-step']);
  }

  toCardio(){
    this.router.navigate(['club/activite/cardio/cardio']);
  }

  toKickBoxing(){
    this.router.navigate(['club/activite/box_MMA/kick-boxing']);
  }

  toMMA(){
    this.router.navigate(['club/activite/box_MMA/mma']);
  }
  toBoxe(){
    this.router.navigate(['club/activite/box_MMA/boxe']);
  }

  toXtremeAbdo(){
    this.router.navigate(['club/activite/musculation/xtreme-abdo']);
  }
  toBodyPump(){
    this.router.navigate(['club/activite/musculation/body-pump']);
  }

  toStrength(){
    this.router.navigate(['club/activite/musculation/strength']);
  }
  toBodyBalance(){
    this.router.navigate(['club/activite/zin_fit/body-balance']);
  }
  toStretching(){
    this.router.navigate(['club/activite/zin_fit/stretching']);
  }
  toYoga(){
    this.router.navigate(['club/activite/zin_fit/yoga']);
  }
}
