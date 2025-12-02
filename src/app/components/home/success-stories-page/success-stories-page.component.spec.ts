import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessStoriesPageComponent } from './success-stories-page.component';

describe('SuccessStoriesPageComponent', () => {
  let component: SuccessStoriesPageComponent;
  let fixture: ComponentFixture<SuccessStoriesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuccessStoriesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessStoriesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
