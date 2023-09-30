import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';
import { environment } from '../../environments/environment';
import { CommonService } from '../_services/common.service';
import { ToastrService } from 'ngx-toastr';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
    selector: 'app-student-course-list',
    templateUrl: './student-course-list.component.html',
    styleUrls: ['./student-course-list.component.scss']
})
export class StudentCourseListComponent implements OnInit {

    @BlockUI() blockUI: NgBlockUI;
    is_authenticated = false;
    courseList: Array<any> = [];
    is_loaded = false;
    user_id: any = '';
    
    assetURL = environment.imageURL;

    courseDetails: any = {};

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
    }

    ngOnInit(): void {
        this.getCourseDetails();
    }

    getCourseDetails() {
        this.blockUI.start('Loading...');
        this._service.get('website/student-course-list').subscribe(res => {
            this.courseList = res.data;
            this.is_loaded = true;
            this.blockUI.stop();
        }, err => {
            this.blockUI.stop();
        });
    }

}
