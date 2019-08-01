import { Injectable } from '@angular/core';
import {WEATHER} from "./weather-data";
import {Weather} from "./weather";
@Injectable()
export class WeatherService {

  constructor() { }
  getWeather(cityName : string):Weather{
    for(var i=0;i<WEATHER.length;i++)
    {
      if(WEATHER[i].cityName == cityName)
      return WEATHER[i];
    }
  }
}
