import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';
import { environment } from '../../environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from '../_services/common.service';
import { ToastrService } from 'ngx-toastr';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
    selector: 'app-course-details',
    templateUrl: './course-details.component.html',
    styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {

    @BlockUI() blockUI: NgBlockUI;
    is_authenticated = false;
    courseList: Array<any> = [];
    is_loaded = false;
    user_id: any = '';

    courseDetails: any = {};

    public user_role = null;
    public currentUser: any = {};

    course_id;
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
        this.course_id = this.route.snapshot.paramMap.get("course_id");
    }

    ngOnInit(): void {
        this.getCourseDetails();
    }

    getCourseDetails() {
        this.blockUI.start('Loading...');
        this.courseDetails = {};
        this.user_id = this.user_id ? this.user_id : 0;
        this._service.get('website/course-details-by-user/' + this.user_id + '/' + this.course_id).subscribe(res => {
            //console.log(res);
            this.courseDetails = res.data;
            console.log(this.courseDetails)
            this.is_loaded = true;
            this.blockUI.stop();
        }, err => {
            this.blockUI.stop();
        });
    }

    PayNow(){
        //purchase-course
        console.log("Pay")
        this.blockUI.start('Loading...');
        let param = {
            course_id: this.course_id
        };

        this._service.post('website/purchase-course', param).subscribe(res => {
            this.toastr.success(res.data.message, 'Success!', { timeOut: 2000 });
            this.getCourseDetails();
            this.blockUI.stop();
        }, err => {
            this.blockUI.stop();
        });
    }

}
