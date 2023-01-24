import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KickBoxingComponent } from './kick-boxing.component';

describe('KickBoxingComponent', () => {
  let component: KickBoxingComponent;
  let fixture: ComponentFixture<KickBoxingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KickBoxingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KickBoxingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
