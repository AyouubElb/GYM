import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos' ;

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css'],
 
})
export class AcceuilComponent implements OnInit {
lastname:string = '';
 count:number ;
 count2:number ;
 value: boolean[] ;
 quote: string;
 caractere: string[] ;
 x : boolean ; 
 whichActualite : string;
 actualiteTab : string[];

  constructor(private router:Router) {
    this.count = 1;
    this.count2 = 0 ;
    this.value= [true, false,false,false,false] ;
    this.quote = "";
    this.caractere = ['N','O',' ','P','A','I','N',' ','N','O',' ','G','A','I','N',''] ;
    this.x = true ;
    this.whichActualite = "actualite1";
    this.actualiteTab  = ["actualite1","actualite2","actualite3","actualite4"]
   }

  ngOnInit(): void {
    AOS.init({
      duration: 700,
      easing: 'ease-in-out-sine'
    }) ;

    this.startCounter();

    this.showMessage() ;

    this.changeActualiteByTime();
  }

  startCounter() {
    setInterval(() => {
      this.value[this.count-1] = false ;
      if(this.count > 4) {
         this.value[0] = true ;
         this.count =0 ; 
      }
      else {
        this.value[this.count] = true ; 
      }
      this.count++;
      
    }, 4000); // Increment count every 4 second
  }

  showMessage() {
    setInterval(() => {
      if(this.x && this.count2 <= 15) {
        this.incrementMessage();
      }
      if( !this.x && this.count2 >= 0) {
        this.decrementMessage();
      }
    }, 300);
  }


  incrementMessage () {
     
       this.quote = this.quote + this.caractere[this.count2] ;  
       if(this.count2 >= 15){
          this.x = false ;   
          this.count2-- ;
       }
       this.count2++ ;     
  }

  decrementMessage () {
     
       this.quote = this.quote.slice(0, -1) ;  
       this.count2-- ;  
       if(this.count2 < 0){
        this.x = true ;
        this.count2++;
       }      
  }

  changeActualiteByTime(){
    setInterval(() => {
     this.changeActualite() ;
    }, 5000);
  }

  changeActualite(){
    if(this.whichActualite === "actualite4") this.whichActualite = "actualite1";
     else {
       let index = this.actualiteTab.indexOf(this.whichActualite);
       this.whichActualite  =this.actualiteTab[index +1];
     }
  }

  nextActualite(){
     if(this.whichActualite === "actualite4") this.whichActualite = "actualite1";
     else {
       let index = this.actualiteTab.indexOf(this.whichActualite);
       this.whichActualite  =this.actualiteTab[index +1];
     }
  }

  lastActualite(){
    if(this.whichActualite === "actualite1") this.whichActualite = "actualite4";
     else {
       let index = this.actualiteTab.indexOf(this.whichActualite);
       this.whichActualite  =this.actualiteTab[index -1];
     }
  }

  toClub(){
    this.router.navigate(['club/espaces']);
  }

  toActivity(){
    this.router.navigate(['club/activite'])
  }

}
