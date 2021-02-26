import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatimexComponent } from './datatimex.component';

describe('DatatimexComponent', () => {
  let component: DatatimexComponent;
  let fixture: ComponentFixture<DatatimexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatatimexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatimexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
