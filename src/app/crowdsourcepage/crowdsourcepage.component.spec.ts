import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrowdsourcepageComponent } from './crowdsourcepage.component';

describe('CrowdsourcepageComponent', () => {
  let component: CrowdsourcepageComponent;
  let fixture: ComponentFixture<CrowdsourcepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrowdsourcepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrowdsourcepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
