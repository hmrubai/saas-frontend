import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';
import { environment } from '../../environments/environment';
import { CommonService } from '../_services/common.service';
import { ToastrService } from 'ngx-toastr';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
    selector: 'app-mentor-student-list',
    templateUrl: './mentor-student-list.component.html',
    styleUrls: ['./mentor-student-list.component.scss']
})
export class MentorStudentListComponent implements OnInit {

    @BlockUI() blockUI: NgBlockUI;
    is_authenticated = false;
    studentList: Array<any> = [];
    is_loaded = false;
    user_id: any = '';
    assetURL = environment.imageURL;

    courseDetails: any = {};

    public user_role = null;
    public currentUser: any = {};

    //course_id;
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
        // this.course_id = this.route.snapshot.paramMap.get("course_id");
        // console.log(this.course_id)
    }

    ngOnInit(): void {
        this.getCourseDetails()
    }

    getCourseDetails() {
        this.blockUI.start('Loading...');
        this._service.get('website/mentor-student-list').subscribe(res => {
            this.studentList = res.data;
            this.is_loaded = true;
            this.blockUI.stop();
        }, err => {
            this.blockUI.stop();
        });
    }

}
