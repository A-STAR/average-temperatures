import { Component, OnChanges, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { debounceTime } from 'rxjs/operators/debounceTime';
import { distinctUntilChanged } from 'rxjs/operators/distinctUntilChanged';

import { TemperatureMap } from '../';

@Component({
  selector: 'temperature-map',
  templateUrl: './temperature-map.component.html',
  styleUrls: ['./temperature-map.component.sass']
})
export class TemperatureMapComponent implements OnChanges, OnInit {

  @Input() temperatureMap: TemperatureMap;
  @Input() i: number;

  gradientId: string;
  progressFill: string;

  mapWidth = 425;
  mapHeight = 32;
  rectHeight: number;
  progressIndent: number;
  progress: number;
  pointerWidth = 2;
  trianglePoints: string;
  triangle = true;

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnChanges() {
    // if (this.temperatureMap.temperature === undefined) {
    //   this.temperatureMap.temperature = 50;
    // }

    this.update();
  }

  ngOnInit() {
    this.gradientId = `gradient${this.i}`;
    this.progressFill = `url(#${this.gradientId})`;

    this.form = this.fb.group({
      width: [
        {
          value: this.mapWidth,
          disabled: false
        },
        {
          validators: [
            Validators.min(100),
            Validators.max(1000)
          ],
          asyncValidators: [],
          updateOn: 'change'
        }
      ],
      height: [
        this.mapHeight,
        [
          Validators.min(5),
          Validators.max(30)
        ]
      ],
      progress: [
        this.temperatureMap.temperature,
        [
          Validators.min(0),
          Validators.min(100)
        ]
      ],
      pointer: [
        this.pointerWidth,
        [
          Validators.min(0.01),
          Validators.min(5)
        ]
      ],
      triangle: this.triangle
    });

    this.form.valueChanges
    .pipe(
      debounceTime(300),
      distinctUntilChanged()
      )
      .subscribe(this.update.bind(this));
      // .subscribe(console.log);
  }

  // tslint:disable-next-line:max-line-length
  update({ width, height, progress, pointer, triangle } = { width: this.mapWidth, height: this.mapHeight, progress: this.temperatureMap.temperature, pointer: this.pointerWidth, triangle: this.triangle }) {

    this.mapWidth = width;
    this.mapHeight = height;
    this.temperatureMap.temperature = progress;
    this.pointerWidth = pointer;
    this.triangle = triangle;

    this.progress = this.mapWidth / 100 * this.temperatureMap.temperature;

    this.rectHeight = this.mapHeight - 7;

    this.trianglePoints = `${this.progress - 7} ${this.mapHeight},
                           ${this.progress} ${this.mapHeight - 7},
                           ${this.progress + 7} ${this.mapHeight}`;

    this.progressIndent = this.triangle ? this.mapHeight : this.rectHeight;
  }

}
