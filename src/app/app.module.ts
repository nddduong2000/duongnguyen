import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyInformationComponent } from './_components/home-profile/my-information.component';
import {ContentProfileComponent} from "./_components/content-profile/content-profile.component";
import { MenuProfileComponent } from './_components/menu-profile/menu-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    MyInformationComponent,
    ContentProfileComponent,
    MenuProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
