import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageTemperaturesComponent } from './average-temperatures.component';

describe('AverageTemperaturesComponent', () => {
  let component: AverageTemperaturesComponent;
  let fixture: ComponentFixture<AverageTemperaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AverageTemperaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AverageTemperaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
