import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from "./main/main.component";
import { NavComponent } from "./nav/nav.component";
import { DetailsComponent } from "./details/details.component";

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' }
  , { path: 'main', component: MainComponent }
  , { path: 'nav', component: NavComponent }
  , { path: 'details', component: DetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
