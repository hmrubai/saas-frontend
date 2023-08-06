import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorOngoingClassListComponent } from './mentor-ongoing-class-list.component';

describe('MentorOngoingClassListComponent', () => {
  let component: MentorOngoingClassListComponent;
  let fixture: ComponentFixture<MentorOngoingClassListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorOngoingClassListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentorOngoingClassListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
