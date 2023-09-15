import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MathjaxModule } from 'mathjax-angular';

import { QuizParticipationRoutingModule } from './quiz-participation-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    QuizParticipationRoutingModule,
    MathjaxModule.forChild()
  ]
})
export class QuizParticipationModule { }
