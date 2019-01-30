import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

public  getWeatherbycity(cityname) {
  return(
    this.http.get('http://dataservice.accuweather.com/locations/v1/cities/search?q=Manosque&apikey=EU7OGSwifOQZkDUAxjIWq2Jq5H5GmZbS')
      .subscribe(data => {
        console.log(data);
      }));
}
}
