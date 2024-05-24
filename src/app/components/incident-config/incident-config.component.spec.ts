import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentConfigComponent } from './incident-config.component';

describe('IncidentConfigComponent', () => {
  let component: IncidentConfigComponent;
  let fixture: ComponentFixture<IncidentConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncidentConfigComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IncidentConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
