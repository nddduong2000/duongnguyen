import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MyInformationComponent} from "./_components/home-profile/my-information.component";
import {ContentProfileComponent} from "./_components/content-profile/content-profile.component";
import {OtherProfileComponent} from "./_components/other-profile/other-profile.component";


const routes: Routes = [
  {path: '', component: MyInformationComponent},
  {path: 'about', component: ContentProfileComponent},
  {path: 'other', component: OtherProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
