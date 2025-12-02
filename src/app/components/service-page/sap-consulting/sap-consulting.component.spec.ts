import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SAPConsultingComponent } from './sap-consulting.component';

describe('SAPConsultingComponent', () => {
  let component: SAPConsultingComponent;
  let fixture: ComponentFixture<SAPConsultingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SAPConsultingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SAPConsultingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
