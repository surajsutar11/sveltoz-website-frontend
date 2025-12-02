import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DroneDevelopementComponent } from './drone-developement.component';

describe('DroneDevelopementComponent', () => {
  let component: DroneDevelopementComponent;
  let fixture: ComponentFixture<DroneDevelopementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DroneDevelopementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DroneDevelopementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
