import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentSubjectDetailsComponent } from './content-subject-details.component';

const routes: Routes = [
  {
    path: '',
    component: ContentSubjectDetailsComponent,
    data: {
      title: 'Content Subject Details'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentSubjectDetailsRoutingModule { }
