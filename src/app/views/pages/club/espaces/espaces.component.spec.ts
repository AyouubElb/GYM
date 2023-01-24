import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspacesComponent } from './espaces.component';

describe('EspacesComponent', () => {
  let component: EspacesComponent;
  let fixture: ComponentFixture<EspacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspacesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
