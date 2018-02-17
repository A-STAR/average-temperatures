import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureMapComponent } from './temperature-map.component';

describe('TemperatureMapComponent', () => {
  let component: TemperatureMapComponent;
  let fixture: ComponentFixture<TemperatureMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemperatureMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperatureMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
