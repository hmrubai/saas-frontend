import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorCompletedClassListComponent } from './mentor-completed-class-list.component';

describe('MentorCompletedClassListComponent', () => {
  let component: MentorCompletedClassListComponent;
  let fixture: ComponentFixture<MentorCompletedClassListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorCompletedClassListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentorCompletedClassListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
