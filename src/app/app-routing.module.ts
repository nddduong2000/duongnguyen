import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MyInformationComponent} from "./_components/home-profile/my-information.component";
import {ContentProfileComponent} from "./_components/content-profile/content-profile.component";


const routes: Routes = [
  {path: '', component: MyInformationComponent},
  {path: 'about', component: ContentProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
