import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MentorCompletedClassListComponent } from './mentor-completed-class-list.component';

const routes: Routes = [
  {
    path: '',
    component: MentorCompletedClassListComponent,
    data: {
      title: 'Expert Completed Class List'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MentorCompletedClassListRoutingModule { }
