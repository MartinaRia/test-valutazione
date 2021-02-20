import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseSummaryComponent } from './response-summary.component';

describe('ResponseSummaryComponent', () => {
  let component: ResponseSummaryComponent;
  let fixture: ComponentFixture<ResponseSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponseSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponseSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
