import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizParticipationComponent } from './quiz-participation.component';

describe('QuizParticipationComponent', () => {
  let component: QuizParticipationComponent;
  let fixture: ComponentFixture<QuizParticipationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizParticipationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizParticipationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
