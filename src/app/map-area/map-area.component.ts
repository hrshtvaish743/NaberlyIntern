import { Component, OnInit } from '@angular/core';
declare var google: any;
@Component({
  selector: 'map-area',
  templateUrl: './map-area.component.html',
  styleUrls: ['./map-area.component.css']
})
export class MapAreaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("hello");
    var mapProp = {
              center: new google.maps.LatLng(51.508742, -0.120850),
              zoom: 5,
              mapTypeId: google.maps.MapTypeId.ROADMAP
          };
    var map = new google.maps.Map(document.getElementById("map"), mapProp);
  }

}
