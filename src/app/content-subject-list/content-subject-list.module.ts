import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BlockUIModule } from 'ng-block-ui';
import { ToastrModule } from 'ngx-toastr';

import { ContentSubjectListRoutingModule } from './content-subject-list-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContentSubjectListRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BlockUIModule,
    ToastrModule
  ]
})
export class ContentSubjectListModule { }
