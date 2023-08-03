import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MentorListComponent } from './mentor-list.component';

const routes: Routes = [
  {
    path: '',
    component: MentorListComponent,
    data: {
      title: 'Course List'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MentorListRoutingModule { }
