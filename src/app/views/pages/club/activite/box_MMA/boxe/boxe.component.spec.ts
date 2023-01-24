import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxeComponent } from './boxe.component';

describe('BoxeComponent', () => {
  let component: BoxeComponent;
  let fixture: ComponentFixture<BoxeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
