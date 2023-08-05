import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';
import { environment } from '../../environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from '../_services/common.service';
import { ToastrService } from 'ngx-toastr';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

    @BlockUI() blockUI: NgBlockUI;
    is_authenticated = false;
    courseList: Array<any> = [];
    is_loaded = false;
    user_id = 0;
    menu_id;

    public user_role = null;
    public currentUser: any = {};

    constructor(
        private _service: CommonService,
        private authService: AuthenticationService,
        private toastr: ToastrService,
        private route: ActivatedRoute,
        private router: Router
    ) { 
        if (this.authService.isAuthenticated()) {
            this.is_authenticated = true;
            this.currentUser = this.authService.currentUserDetails.value;
            this.user_role = this.currentUser.user_type;
            this.user_id = this.currentUser.id;
        }
        this.menu_id = this.route.snapshot.paramMap.get("menu_id");
        console.log(this.menu_id)
    }

    ngOnInit(): void {
        console.log(this.user_id);
        this.getCourseList();
    }

    getCourseList() {
        this.blockUI.start('Loading...');
        this._service.get('website/course-list-by-id/' + this.menu_id).subscribe(res => {
            console.log(res);
            this.courseList = res.data.courses;
            console.log(this.courseList)
            this.is_loaded = true;
            this.blockUI.stop();
        }, err => {
            this.blockUI.stop();
        });
    }

}
