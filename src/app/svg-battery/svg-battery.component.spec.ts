import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgBatteryComponent } from './svg-battery.component';

describe('SvgBatteryComponent', () => {
  let component: SvgBatteryComponent;
  let fixture: ComponentFixture<SvgBatteryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgBatteryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgBatteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
