import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BlockUIModule } from 'ng-block-ui';
import { ToastrModule } from 'ngx-toastr';

import { CourseListRoutingModule } from './course-list-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CourseListRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BlockUIModule,
    ToastrModule
  ]
})
export class CourseListModule { }
