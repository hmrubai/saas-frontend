import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentCourseListComponent } from './student-course-list.component';

const routes: Routes = [
  {
    path: '',
    component: StudentCourseListComponent,
    data: {
      title: 'Student Course List'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentCourseListRoutingModule { }
