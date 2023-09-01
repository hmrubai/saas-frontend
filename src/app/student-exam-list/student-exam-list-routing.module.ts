import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentExamListComponent } from './student-exam-list.component';

const routes: Routes = [
  {
    path: '',
    component: StudentExamListComponent,
    data: {
      title: 'Student Exam List'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentExamListRoutingModule { }
