import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weather = null;
  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weather = this.weatherService.getWeatherbycity('Marseille');
    // .subscribe(cities => {
    //   console.log(cities);
    // };
    console.log(this.weather);
  }

}
