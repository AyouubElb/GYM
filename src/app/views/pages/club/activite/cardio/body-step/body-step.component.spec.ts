import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyStepComponent } from './body-step.component';

describe('BodyStepComponent', () => {
  let component: BodyStepComponent;
  let fixture: ComponentFixture<BodyStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyStepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
