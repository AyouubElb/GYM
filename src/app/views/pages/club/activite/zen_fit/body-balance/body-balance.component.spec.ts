import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyBalanceComponent } from './body-balance.component';

describe('BodyBalanceComponent', () => {
  let component: BodyBalanceComponent;
  let fixture: ComponentFixture<BodyBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyBalanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
