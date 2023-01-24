import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XtremeAbdoComponent } from './xtreme-abdo.component';

describe('XtremeAbdoComponent', () => {
  let component: XtremeAbdoComponent;
  let fixture: ComponentFixture<XtremeAbdoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XtremeAbdoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XtremeAbdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
