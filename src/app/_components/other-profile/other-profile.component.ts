import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-other-profile',
  templateUrl: './other-profile.component.html',
  styleUrls: ['./other-profile.component.scss']
})
export class OtherProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.setActiveMenu('other');
  }
  setActiveMenu(id) {
    $("#sidebar .nav-link").removeClass("active");
    // $(".nav").find(".show").removeClass("show");
    $("#" + id).addClass("active");
    $("#" + id).closest(".collapse").addClass("show");
  }
}
