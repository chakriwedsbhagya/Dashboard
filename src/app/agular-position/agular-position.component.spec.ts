import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgularPositionComponent } from './agular-position.component';

describe('AgularPositionComponent', () => {
  let component: AgularPositionComponent;
  let fixture: ComponentFixture<AgularPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgularPositionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgularPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
