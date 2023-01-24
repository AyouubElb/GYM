import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './views/pages/acceuil/acceuil.component';
import { ActiviteComponent } from './views/pages/club/activite/activite.component';
import { BoxeComponent } from './views/pages/club/activite/box_MMA/boxe/boxe.component';
import { KickBoxingComponent } from './views/pages/club/activite/box_MMA/kick-boxing/kick-boxing.component';
import { MmaComponent } from './views/pages/club/activite/box_MMA/mma/mma.component';
import { BodyStepComponent } from './views/pages/club/activite/cardio/body-step/body-step.component';
import { CardioComponent } from './views/pages/club/activite/cardio/cardio/cardio.component';
import { CircuitMinceurComponent } from './views/pages/club/activite/cardio/circuit-minceur/circuit-minceur.component';
import { BodyPumpComponent } from './views/pages/club/activite/musculation/body-pump/body-pump.component';
import { StrengthComponent } from './views/pages/club/activite/musculation/strength/strength.component';
import { XtremeAbdoComponent } from './views/pages/club/activite/musculation/xtreme-abdo/xtreme-abdo.component';
import { BodyBalanceComponent } from './views/pages/club/activite/zen_fit/body-balance/body-balance.component';
import { StretchingComponent } from './views/pages/club/activite/zen_fit/stretching/stretching.component';
import { YogaComponent } from './views/pages/club/activite/zen_fit/yoga/yoga.component';
import { EspacesComponent } from './views/pages/club/espaces/espaces.component';
import { ContactComponent } from './views/pages/contact/contact.component';
import { LoginComponent } from './views/pages/login/login.component';
import { SignUpComponent } from './views/pages/sign-up/sign-up.component';


const routes: Routes = [
  {
    path: "",
		component: AcceuilComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path:"club/activite",
    component: ActiviteComponent,
  },
  {
    path:"club/activite/cardio/circuit-minceur",
    component: CircuitMinceurComponent,
  },
  {
    path:"club/activite/cardio/body-step",
    component: BodyStepComponent,
  },
  {
    path:"club/activite/cardio/cardio",
    component: CardioComponent,
  },
  {
    path:"club/activite/box_MMA/kick-boxing",
    component: KickBoxingComponent,
  },
  {
    path:"club/activite/box_MMA/mma",
    component: MmaComponent,
  },
  {
    path:"club/activite/box_MMA/boxe",
    component: BoxeComponent,
  },
  {
    path:"club/activite/musculation/xtreme-abdo",
    component: XtremeAbdoComponent,
  },
  {
    path:"club/activite/musculation/body-pump",
    component: BodyPumpComponent,
  },
  {
    path:"club/activite/musculation/strength",
    component: StrengthComponent,
  },
  {
    path:"club/activite/zin_fit/body-balance",
    component: BodyBalanceComponent,
  },
  {
    path:"club/activite/zin_fit/stretching",
    component: StretchingComponent,
  },
  {
    path:"club/activite/zin_fit/yoga",
    component: YogaComponent,
  },
  {
    path:"club/espaces",
    component: EspacesComponent,
  },
  {
    path:"signUp",
    component: SignUpComponent,
  },
  {
    path:"contact",
    component: ContactComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
