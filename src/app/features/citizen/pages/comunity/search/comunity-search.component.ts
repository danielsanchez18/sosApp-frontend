import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'citizen-comunity-search',
  templateUrl: './comunity-search.component.html',
})
export class CitizenComunitySearchComponent implements OnInit {

  map: L.Map | undefined;

  ngOnInit(): void {
    this.initMap()
  }

  private initMap() : void {
    this.map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    L.marker([51.5, -0.09]).addTo(this.map)
      .bindPopup('A pretty CSS popup.<br> Easily customizable.')
      .openPopup();
  }

}

