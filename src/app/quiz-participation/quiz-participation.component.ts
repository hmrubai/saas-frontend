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
    selector: 'app-quiz-participation',
    templateUrl: './quiz-participation.component.html',
    styleUrls: ['./quiz-participation.component.scss']
})
export class QuizParticipationComponent implements OnInit {

    @BlockUI() blockUI: NgBlockUI;
    is_authenticated = false;
    courseList: Array<any> = [];
    is_loaded = false;
    user_id: any = '';
    modalRef?: BsModalRef;
    timer: Timer = new Timer();
    quizRunning: boolean = false;

    assetURL = environment.imageURL;

    questionList: Array<any> = [];

    video_url: any;
    pdfFilePath: any;
    modal_title = 'Video';
    modalConfig: any = { class: 'gray modal-xl', backdrop: 'static' };

    courseDetails: any = {};
    quizDetails: any = {};

    public user_role = null;
    public currentUser: any = {};

    timerSubscription: Subscription;

    quiz_id;
    result_id;

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
        this.quiz_id = this.route.snapshot.paramMap.get("quiz_id");
        this.result_id = this.route.snapshot.paramMap.get("result_id");
        console.log(this.quiz_id)
        console.log(this.result_id)
    }

    ngOnInit(): void {
        this.getQuizDetails();
    }

    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
    }

    safeURL(videoURL: string){
        return this._sanitizer.bypassSecurityTrustResourceUrl(videoURL);
     }

    showVideo(item: any, template: TemplateRef<any>){

        if(!this.is_authenticated){
            this.toastr.warning("Please login first!", 'Attention!', { timeOut: 2000 });
            return;
        }

        if(!this.courseDetails.is_purchased){
            this.toastr.warning("Please purchase first!", 'Attention!', { timeOut: 2000 });
            return;
        }

        this.modal_title = item.title;
        this.video_url = item.video_youtube_url;
        this.openModal(template);
    }

    viewScript(item: any, template: TemplateRef<any>){
        console.log(item)
        if(!item.script_raw_url){
            this.toastr.warning("No resource file has been added!", 'Attention!', { timeOut: 2000 });
            return;
        }

        window.open(
            this.assetURL + '../' + item.script_raw_url, '_blank'
        );
    }

    startQuiz(duration: number){
        this.quizRunning = true;
        this.timerSubscription = this.timer.start(duration * 60).subscribe(status => {
            if (status === 'ended') {
                //this.onTimesUp();
                console.log('Auto Submitted!')
                this.submitAnswer();
                this.timerSubscription.unsubscribe();
            }
        });
    }

    submitAnswer(){
        console.log("Submited")
        const submittedQuestions: Array<any> = [];
        this.questionList.forEach(element => {
            submittedQuestions.push({
                question_id: element.id,
                answer1: element.Options[0] ? element.Options[0].Selected ? true : null : null,
                answer2: element.Options[1] ? element.Options[1].Selected ? true : null : null,
                answer3: element.Options[2] ? element.Options[2].Selected ? true : null : null,
                answer4: element.Options[3] ? element.Options[3].Selected ? true : null : null
            })
        });

        const noOfAnsweredQs = submittedQuestions.filter(x =>
            (x.answer1 !== null || x.answer2 !== null || x.answer3 !== null || x.answer4 !== null)
        ).length;

        console.log(submittedQuestions)
        console.log(noOfAnsweredQs)

        let param = {
            chapter_quiz_id: this.quiz_id,
            result_id: this.result_id,
            answers: submittedQuestions
        }

        this.blockUI.start('Submitting Answer...');
        this._service.post('website/submit-quiz', param).subscribe(res => {
            this.toastr.success(res.message, 'Success!', { timeOut: 2000 });
            
            this.blockUI.stop();
        }, err => {
            this.blockUI.stop();
        });

    }

    stopQuizConfirm(){
        console.log("Stopped")
    }

    openConfirmModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
    }

    confirm(): void {
        this.modalRef?.hide();
        this.startQuiz(5);
    }
    
    decline(): void {
        this.modalRef?.hide();
    }

    getQuizDetails(){
        this.blockUI.start('Loading...');
        this.quizDetails = {};
        this._service.get('website/quiz-details-by-id/' + this.quiz_id).subscribe(res => {
            this.quizDetails = res.data;
            console.log(this.quizDetails)

            this.quizDetails.questions.forEach((element:any) => {
                this.questionList.push({
                    id: element.id,
                    question: element.question_text,
                    question_bn: element.question_text_bn,
                    question_image: element.question_image,
                    explanation_text: element.explanation_text,
                    explanation_image: element.explanation_image,
                    Options:
                        [
                            { Text: element.option1, image: element.option1_image, Selected: false },
                            { Text: element.option2, image: element.option2_image, Selected: false },
                            { Text: element.option3, image: element.option3_image, Selected: false },
                            { Text: element.option4, image: element.option4_image, Selected: false }
                        ]
                });
            });

            this.startQuiz(this.quizDetails.duration);
            this.is_loaded = true;
            this.blockUI.stop();
        }, err => {
            this.blockUI.stop();
        });
    }

    onAnswerSelect(event: any, item: any, optionIndex: any) {
        let checked_value = event.target.checked;
        if (checked_value) {
            for (let index = 0; index < item.Options.length; index++) {
                if (index === optionIndex) item.Options[index].Selected = true;
            }
        } else {
            item.Options[optionIndex].Selected = false
        }
    }

    getCourseDetails() {
        this.blockUI.start('Loading...');
        this.courseDetails = {};
        this.user_id = this.user_id ? this.user_id : 0;
        this._service.get('website/course-details-by-user/' + this.user_id + '/' + this.quiz_id).subscribe(res => {
            this.courseDetails = res.data;
            this.is_loaded = true;
            this.blockUI.stop();
        }, err => {
            this.blockUI.stop();
        });
    }

    PayNow(){
        console.log("Pay")
        this.blockUI.start('Loading...');
        let param = {
            course_id: this.quiz_id
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
