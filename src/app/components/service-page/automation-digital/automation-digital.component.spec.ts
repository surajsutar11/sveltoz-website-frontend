import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomationDigitalComponent } from './automation-digital.component';

describe('AutomationDigitalComponent', () => {
  let component: AutomationDigitalComponent;
  let fixture: ComponentFixture<AutomationDigitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutomationDigitalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutomationDigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
