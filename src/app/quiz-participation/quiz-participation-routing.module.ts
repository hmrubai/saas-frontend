import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizParticipationComponent } from './quiz-participation.component';

const routes: Routes = [
  {
    path: '',
    component: QuizParticipationComponent,
    data: {
      title: 'Quiz Participation'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizParticipationRoutingModule { }
