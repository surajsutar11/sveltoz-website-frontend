import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlMlSolutionsComponent } from './al-ml-solutions.component';

describe('AlMlSolutionsComponent', () => {
  let component: AlMlSolutionsComponent;
  let fixture: ComponentFixture<AlMlSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlMlSolutionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlMlSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
