import { Component, OnInit, TemplateRef } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';
import { environment } from '../../environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from '../_services/common.service';
import { Timer } from '../_models/timer';
import { ToastrService } from 'ngx-toastr';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-content-subject-details',
    templateUrl: './content-subject-details.component.html',
    styleUrls: ['./content-subject-details.component.scss']
})
export class ContentSubjectDetailsComponent implements OnInit {

    @BlockUI() blockUI: NgBlockUI;
    is_authenticated = false;
    courseList: Array<any> = [];
    is_loaded = false;
    user_id: any = '';
    modalRef?: BsModalRef;

    assetURL = environment.imageURL;

    image_thumbnail = "assets/images/images.png";

    video_url: any;
    pdfFilePath: any;
    modal_title = 'Video';
    modalConfig: any = { class: 'gray modal-xl', backdrop: 'static' };

    outlineDetails: any = {};
    outline: Array<any> = [];
    scriptList: Array<any> = [];
    videoList: Array<any> = [];
    quizList: Array<any> = [];

    quizDetails: any = {};

    public user_role = null;
    public currentUser: any = {};

    content_subject_id;
    constructor(
        
        private _service: CommonService,
        private authService: AuthenticationService,
        private toastr: ToastrService,
        private route: ActivatedRoute,
        private router: Router,
        private modalService: BsModalService,
        private _sanitizer: DomSanitizer
    ) {
        if (this.authService.isAuthenticated()) {
            this.is_authenticated = true;
            this.currentUser = this.authService.currentUserDetails.value;
            this.user_role = this.currentUser.user_type;
            this.user_id = this.currentUser.id;
        }

        this.content_subject_id = this.route.snapshot.paramMap.get("content_subject_id");
        console.log(this.content_subject_id)
    }

    ngOnInit(): void {
        this.getOutlineDetails();
    }

    getOutlineDetails() {
        this.blockUI.start('Loading...');
        this.outlineDetails = {};
        this.user_id = this.user_id ? this.user_id : 0;
        this._service.get('website/content-outline-details-by-id/' + this.content_subject_id).subscribe(res => {
            this.outlineDetails = res.data;
            this.outline = this.outlineDetails.outline;
            this.scriptList = this.outlineDetails.outline.scripts;
            this.videoList = this.outlineDetails.outline.videos;
            this.quizList = this.outlineDetails.outline.quiz;

            console.log(this.outlineDetails.outline)

            // if(this.courseDetails.thumbnail){
            //     this.image_thumbnail = this.assetURL + this.courseDetails.thumbnail;
            // }

            this.is_loaded = true;
            this.blockUI.stop();
        }, err => {
            this.blockUI.stop();
        });
    }

}
