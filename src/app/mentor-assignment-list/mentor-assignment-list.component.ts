import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { environment } from '../../environments/environment';
import { CommonService } from '../_services/common.service';
import { ToastrService } from 'ngx-toastr';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Location } from '@angular/common';
import * as moment from 'moment';

@Component({
    selector: 'app-mentor-assignment-list',
    templateUrl: './mentor-assignment-list.component.html',
    styleUrls: ['./mentor-assignment-list.component.scss']
})
export class MentorAssignmentListComponent implements OnInit {

    @BlockUI() blockUI: NgBlockUI;
    is_authenticated = false;
    courseList: Array<any> = [];
    modalRef?: BsModalRef;
    modalRefList?: BsModalRef;
    is_loaded = false;
    is_assignment_loaded = false;
    user_id: any = '';
    submitted = false;
    
    assetURL = environment.imageURL;

    entryForm: FormGroup;

    courseDetails: any = {};
    studentList: Array<any> = [];

    assignmentList: Array<any> = [];

    assignmentDetails: any = {};

    classList: Array<any> = [];
    subjectList: Array<any> = [];
    chapterList: Array<any> = [];

    scriptList: Array<any> = [];
    quizList: Array<any> = [];
    videoList: Array<any> = [];

    scriptCount = 0;
    quizCount = 0;
    videoCount = 0;

    resourceList: Array<any> = [];
    is_resource_loaded = false;

    public user_role = null;
    public currentUser: any = {};

    constructor(
        private _service: CommonService,
        private authService: AuthenticationService,
        private toastr: ToastrService,
        private route: ActivatedRoute,
        private modalService: BsModalService,
        private router: Router,
        public formBuilder: FormBuilder,
        private location: Location
    ) {
        if (this.authService.isAuthenticated()) {
            this.is_authenticated = true;
            this.currentUser = this.authService.currentUserDetails.value;
            this.user_role = this.currentUser.user_type;
            this.user_id = this.currentUser.id;
        }
    }

    ngOnInit(): void {
        this.getCourseList();
        this.getClassList();
        this.getAssignmentList();

        this.entryForm = this.formBuilder.group({
            title: [null, [Validators.required]],
            description: [null, [Validators.required]],
            course_id: [null, [Validators.required]],
            student_id: [null, [Validators.required]],
            class_id: [null],
            subject_id: [null],
            chapter_id: [null],
            deadline: [null, [Validators.required]],
        });
    }

    get f() {
        return this.entryForm.controls;
    }

    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
    }

    formSubmit(){
        this.submitted = true;
        if (this.entryForm.invalid) {
            return;
        }

        let script = this.scriptList.filter(function (item) {
            return item.is_checked == true;
        });

        let video = this.videoList.filter(function (item) {
            return item.is_checked == true;
        });

        let quiz = this.quizList.filter(function (item) {
            return item.is_checked == true;
        });

        let params = {
            "course_id": this.entryForm.value.course_id,
            "title":  this.entryForm.value.title,
            "title_bn": this.entryForm.value.title,
            "description": this.entryForm.value.description,
            "deadline": this.entryForm.value.deadline,
            "student_id": this.entryForm.value.student_id,
            "script": script,
            "video": video,
            "quiz": quiz
        }

        this.blockUI.start('Creating Assignment...');
        this._service.post('website/create-assignment', params).subscribe(res => {
            this.toastr.success(res.message, 'Success!', { timeOut: 2000 });
            this.hideModal();
            this.resetList();
            this.getAssignmentList();
            this.blockUI.stop();
        }, err => {
            this.toastr.warning(err.message, 'Attention!', { timeOut: 2000 });
            this.blockUI.stop();
        });
    }

    hideModal(){
        this.submitted = false;
        this.modalRef?.hide();
        this.entryForm.reset();
    }

    resetList(){
        this.scriptList = [];
        this.quizList = [];
        this.videoList = [];
    }

    checkCount(){
        console.log('click');
        this.scriptCount = this.scriptList.filter(function (item) {
            return item.is_checked == true;
        }).length;

        this.quizCount = this.quizList.filter(function (item) {
            return item.is_checked == true;
        }).length;

        this.videoCount = this.videoList.filter(function (item) {
            return item.is_checked == true;
        }).length;
        
    }

    openResorceModal(template: TemplateRef<any>) {
        this.modalRefList = this.modalService.show(template);
    }

    getCourseList() {
        this.blockUI.start('Loading...');
        this._service.get('website/mentor-course-list').subscribe(res => {
            this.courseList = res.data;
            this.is_loaded = true;
            this.blockUI.stop();
        }, err => {
            this.blockUI.stop();
        });
    }

    getStudentList(event:any){
        this.studentList = [];
        this.blockUI.start('Loading...');
        this._service.get('website/mentor-student-list-by-course/' + event.id).subscribe(res => {
            this.studentList = res.data;
            this.blockUI.stop();
        }, err => {
            this.blockUI.stop();
        });
    }

    getAssignmentList(){
        this.blockUI.start('Loading...');
        this._service.get('website/assignment-list').subscribe(res => {
            this.assignmentList = res.data;
            this.is_assignment_loaded = true;
            this.blockUI.stop();
        }, err => {
            this.blockUI.stop();
        });
    }

    publishAssignment(){
        let params = {
            assignment_id: this.assignmentDetails.id
        }

        this.blockUI.start('Updating Assignment...');
        this._service.post('website/publish-assignment', params).subscribe(res => {
            this.toastr.success(res.message, 'Success!', { timeOut: 2000 });
            this.hideModal();
            this.getAssignmentList();
            this.blockUI.stop();
        }, err => {
            this.toastr.warning(err.message, 'Attention!', { timeOut: 2000 });
            this.blockUI.stop();
        });
    }

    openConfirmPublishModal(item:any, template: TemplateRef<any>) {
        this.assignmentDetails = item;
        this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
    }

    confirmPublish(): void {
        this.modalRef?.hide();
        console.log(this.assignmentDetails);
        this.publishAssignment();
    }
    
    declinePublish(): void {
        this.modalRef?.hide();
    }

    getClassList(){
        this.blockUI.start('Loading...');
        this._service.get('website/class-list').subscribe(res => {
            this.classList = res.data;
            this.blockUI.stop();
        }, err => {
            this.blockUI.stop();
        });
    }

    getSubjectList(event:any){
        this.subjectList = [];
        this.chapterList = [];
        this.entryForm.controls['subject_id'].setValue(null);
        this.entryForm.controls['chapter_id'].setValue(null);
        this.blockUI.start('Loading...');
        this._service.get('website/subject-list-by-class-id/' + event.id).subscribe(res => {
            this.subjectList = res.data;
            this.blockUI.stop();
        }, err => {
            this.blockUI.stop();
        });
    }

    getChapterList(event:any){
        this.chapterList = [];
        this.blockUI.start('Loading...');
        this._service.get('website/chapter-list-by-subject-id/' + event.id).subscribe(res => {
            this.chapterList = res.data;
            this.blockUI.stop();
        }, err => {
            this.blockUI.stop();
        });
    }

    changeGetResourceList(event:any){
        this.resourceList = [];
        this.blockUI.start('Loading...');
        this._service.get('website/resource-list-by-chapter-id/' + event.id).subscribe(res => {
            this.resourceList = res.data;

            this.scriptList = res.data.script_list;
            this.scriptList.forEach(item => {
                item.is_checked = false;
            });

            this.quizList = res.data.quiz_list;
            this.quizList.forEach(item => {
                item.is_checked = false;
            });

            this.videoList = res.data.video_list;
            this.videoList.forEach(item => {
                item.is_checked = false;
            });

            this.is_resource_loaded = true;
            this.blockUI.stop();
        }, err => {
            this.blockUI.stop();
        });
    }

}
