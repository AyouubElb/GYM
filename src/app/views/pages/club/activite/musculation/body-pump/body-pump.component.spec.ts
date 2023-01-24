import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyPumpComponent } from './body-pump.component';

describe('BodyPumpComponent', () => {
  let component: BodyPumpComponent;
  let fixture: ComponentFixture<BodyPumpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyPumpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyPumpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
