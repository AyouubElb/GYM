import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircuitMinceurComponent } from './circuit-minceur.component';

describe('CircuitMinceurComponent', () => {
  let component: CircuitMinceurComponent;
  let fixture: ComponentFixture<CircuitMinceurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircuitMinceurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircuitMinceurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
