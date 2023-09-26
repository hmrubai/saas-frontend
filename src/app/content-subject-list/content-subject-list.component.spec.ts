import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSubjectListComponent } from './content-subject-list.component';

describe('ContentSubjectListComponent', () => {
  let component: ContentSubjectListComponent;
  let fixture: ComponentFixture<ContentSubjectListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentSubjectListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentSubjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
