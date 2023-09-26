import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentSubjectListComponent } from './content-subject-list.component';

const routes: Routes = [
  {
    path: '',
    component: ContentSubjectListComponent,
    data: {
      title: 'Content Subject List'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentSubjectListRoutingModule { }
