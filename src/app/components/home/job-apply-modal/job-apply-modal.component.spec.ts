import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobApplyModalComponent } from './job-apply-modal.component';

describe('JobApplyModalComponent', () => {
  let component: JobApplyModalComponent;
  let fixture: ComponentFixture<JobApplyModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobApplyModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobApplyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
