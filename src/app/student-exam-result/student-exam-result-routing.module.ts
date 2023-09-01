import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentExamResultComponent } from './student-exam-result.component';

const routes: Routes = [
  {
    path: '',
    component: StudentExamResultComponent,
    data: {
      title: 'Student Exam Result'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentExamResultRoutingModule { }
