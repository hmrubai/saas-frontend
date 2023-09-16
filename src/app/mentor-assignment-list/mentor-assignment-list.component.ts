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
    is_loaded = false;
    user_id: any = '';
    submitted = false;

    entryForm: FormGroup;

    courseDetails: any = {};

    public user_role = null;
    public currentUser: any = {};

    selectedCar: number;

    cars = [
        { id: 1, name: 'Volvo' },
        { id: 2, name: 'Saab' },
        { id: 3, name: 'Opel' },
        { id: 4, name: 'Audi' },
    ];

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
        this.getPurchaseList();

        this.entryForm = this.formBuilder.group({
            mapping_id: [null, [Validators.required]],
            title: [null, [Validators.required]],
            description: [null, [Validators.required]],
            course_id: [null, [Validators.required]],
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
        this.blockUI.start('Loading...');
    }

    getPurchaseList() {
        this.blockUI.start('Loading...');
        this._service.get('website/student-purchase-list').subscribe(res => {
            this.courseList = res.data;
            this.is_loaded = true;
            this.blockUI.stop();
        }, err => {
            this.blockUI.stop();
        });
    }

    hideModal(){
        this.submitted = false;
        this.modalRef?.hide();
        this.entryForm.reset();
    }

}
