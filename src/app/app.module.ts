/*--============================== Angular FrameWork modules ==============================--*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//======= Angular Google reCapta V2 ==============//
import { ReCaptchaModule } from 'angular2-recaptcha';
//=================Internal component list=============================//
import {PostService} from './contact.component.service';
import { ContactComponent } from './contact.component';

import { FacebookModule } from 'ngx-facebook';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    ReCaptchaModule,
    FacebookModule.forRoot()
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
