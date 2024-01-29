import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HisCounterComponent } from './his-counter.component';

describe('HisCounterComponent', () => {
  let component: HisCounterComponent;
  let fixture: ComponentFixture<HisCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HisCounterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HisCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
