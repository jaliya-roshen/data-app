import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadchartComponent } from './loadchart.component';

describe('LoadchartComponent', () => {
  let component: LoadchartComponent;
  let fixture: ComponentFixture<LoadchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadchartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
