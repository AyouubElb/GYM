import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ActiviteComponent } from './club/activite/activite.component';
import { EspacesComponent } from './club/espaces/espaces.component';
import { ShopComponent } from './shop/shop.component';
import { KickBoxingComponent } from './club/activite/boxe_MMA/kick-boxing/kick-boxing.component';
import { CircuitMinceurComponent } from './club/activite/cardio/circuit-minceur/circuit-minceur.component';
import { LoginComponent } from './login/login.component';
import { BodyStepComponent } from './club/activite/cardio/body-step/body-step.component';
import { CardioComponent } from './club/activite/cardio/cardio/cardio.component';
import { MmaComponent } from './club/activite/box_MMA/mma/mma.component';
import { BoxeComponent } from './club/activite/box_MMA/boxe/boxe.component';
import { XtremeAbdoComponent } from './club/activite/musculation/xtreme-abdo/xtreme-abdo.component';
import { BodyPumpComponent } from './club/activite/musculation/body-pump/body-pump.component';
import { StrengthComponent } from './club/activite/musculation/strength/strength.component';
import { BodyBalanceComponent } from './club/activite/zen_fit/body-balance/body-balance.component';
import { StretchingComponent } from './club/activite/zen_fit/stretching/stretching.component';
import { YogaComponent } from './club/activite/zen_fit/yoga/yoga.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    PagesComponent,
    AcceuilComponent,
    NavbarComponent,
    ActiviteComponent,
    EspacesComponent,
    ShopComponent,
    KickBoxingComponent,
    CircuitMinceurComponent,
    LoginComponent,
    BodyStepComponent,
    CardioComponent,
    MmaComponent,
    BoxeComponent,
    XtremeAbdoComponent,
    BodyPumpComponent,
    StrengthComponent,
    BodyBalanceComponent,
    StretchingComponent,
    YogaComponent,
    SignUpComponent,
    ContactComponent
  ],

  imports: [
    CommonModule
  ]
})
export class PagesModule { }
