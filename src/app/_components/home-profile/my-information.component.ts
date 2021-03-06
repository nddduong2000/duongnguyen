import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-my-information',
  templateUrl: './my-information.component.html',
  styleUrls: ['./my-information.component.scss']
})
export class MyInformationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.setActiveMenu('home');
  }
  setActiveMenu(id) {
    $("#sidebar .nav-link").removeClass("active");
    // $(".nav").find(".show").removeClass("show");
    $("#" + id).addClass("active");
    $("#" + id).closest(".collapse").addClass("show");
  }

}
