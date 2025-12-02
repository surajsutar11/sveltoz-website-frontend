import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudInfrastructureComponent } from './cloud-infrastructure.component';

describe('CloudInfrastructureComponent', () => {
  let component: CloudInfrastructureComponent;
  let fixture: ComponentFixture<CloudInfrastructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudInfrastructureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudInfrastructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
