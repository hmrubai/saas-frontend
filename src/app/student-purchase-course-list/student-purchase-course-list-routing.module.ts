import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentPurchaseCourseListComponent } from './student-purchase-course-list.component';

const routes: Routes = [
  {
    path: '',
    component: StudentPurchaseCourseListComponent,
    data: {
      title: 'Student Course List'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentPurchaseCourseListRoutingModule { }
