import {Component, OnInit} from '@angular/core';
import {MenuProfileComponent} from "../menu-profile/menu-profile.component";

declare var $: any;
@Component({
  selector: 'app-content-profile',
  templateUrl: './content-profile.component.html',
  styleUrls: ['./content-profile.component.scss']
})
export class ContentProfileComponent extends MenuProfileComponent implements OnInit {
  ngOnInit() {
    this.setActiveMenu('about');
  }
  setActiveMenu(id) {
    $("#menuID .menu-option").removeClass("active");
    // $(".nav").find(".show").removeClass("show");
    $("#" + id).addClass("active");
    $("#" + id).closest(".collapse").addClass("show");
  }

}
