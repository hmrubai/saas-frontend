import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentPaymentListComponent } from './student-payment-list.component';

const routes: Routes = [
  {
    path: '',
    component: StudentPaymentListComponent,
    data: {
      title: 'Student Course List'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentPaymentListRoutingModule { }
