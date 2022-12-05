import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from "./materials.module";
import { FormsModule, FormControl, FormGroup } from '@angular/forms';

import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';
import { DetailsComponent } from "./details/details.component";
import { UserService } from "../app/services/user.service"

@NgModule({
  declarations: [
      AppComponent,
      MainComponent,
      NavComponent,
      DetailsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
    , MaterialsModule
    , HttpClientModule
    , FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
