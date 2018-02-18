import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs/observable/from';
import { mergeMap } from 'rxjs/operators/mergeMap';
import { toArray } from 'rxjs/operators/toArray';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';

import { TemperatureMap } from '../../shared';

@Injectable()
export class AverageTemperaturesService {

  private temperatureMaps: TemperatureMap[] = [
    {color: '#0000ff'},
    {color: '#ff0000'}
  ];

  constructor(private http: HttpClient) { }

  private get temperature$(): Observable<number> {
    return this.http.get<number>(`https://www.random.org/integers/?num=1&min=0&max=100&col=1&base=10&format=plain&rnd=new`);
  }

  get temperatureMaps$(): Observable<TemperatureMap[]> {
    return from(this.temperatureMaps).pipe(
      mergeMap(() => this.temperature$),
      toArray(),
      map(response => this.temperatureMaps.map((element, index) =>
        Object.assign({ }, element, {temperature: response[index]})
      )),
      startWith(this.temperatureMaps)
    );
  }

}
