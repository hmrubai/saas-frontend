import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSubjectDetailsComponent } from './content-subject-details.component';

describe('ContentSubjectDetailsComponent', () => {
  let component: ContentSubjectDetailsComponent;
  let fixture: ComponentFixture<ContentSubjectDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentSubjectDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentSubjectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
