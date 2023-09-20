import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './index/index.component';
import { ClassComponent } from './class/class.component';
import { AddmissionComponent } from './addmission/addmission.component';
import { AllcourseComponent } from './allcourse/allcourse.component';
import { OnlineComponent } from './online/online.component';
import { CoachComponent } from './coach/coach.component';
import { CareerComponent } from './career/career.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { FaqComponent } from './faq/faq.component';
import { TermsComponent } from './terms/terms.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { BlockUIModule } from 'ng-block-ui';
import { ModalModule } from 'ngx-bootstrap/modal';
import { MathjaxModule } from "mathjax-angular";
import { NgSelectModule } from '@ng-select/ng-select';

import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { ContentListComponent } from './content-list/content-list.component';
import { MentorDashboardComponent } from './mentor-dashboard/mentor-dashboard.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { MentorStudentListComponent } from './mentor-student-list/mentor-student-list.component';
import { MentorScheduleListComponent } from './mentor-schedule-list/mentor-schedule-list.component';
import { MentorCompletedClassListComponent } from './mentor-completed-class-list/mentor-completed-class-list.component';
import { MentorOngoingClassListComponent } from './mentor-ongoing-class-list/mentor-ongoing-class-list.component';
import { MentorUpdateLinkComponent } from './mentor-update-link/mentor-update-link.component';
import { StudentCourseListComponent } from './student-course-list/student-course-list.component';
import { StudentClassListComponent } from './student-class-list/student-class-list.component';
import { StudentPurchaseCourseListComponent } from './student-purchase-course-list/student-purchase-course-list.component';
import { StudentPaymentListComponent } from './student-payment-list/student-payment-list.component';
import { StudentAssignmentListComponent } from './student-assignment-list/student-assignment-list.component';
import { StudentExamListComponent } from './student-exam-list/student-exam-list.component';
import { StudentExamResultComponent } from './student-exam-result/student-exam-result.component';
import { MentorAssignmentListComponent } from './mentor-assignment-list/mentor-assignment-list.component';
import { MentorStudentProgressListComponent } from './mentor-student-progress-list/mentor-student-progress-list.component';
import { QuizParticipationComponent } from './quiz-participation/quiz-participation.component';
import { MentorProfileComponent } from './mentor-profile/mentor-profile.component';
import { StudentClassHistoryComponent } from './student-class-history/student-class-history.component';


import { TruncatePipe } from './_helpers/truncate-pipe';

@NgModule({
  declarations: [
    AppComponent,
    TruncatePipe,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    ClassComponent,
    AddmissionComponent,
    AllcourseComponent,
    OnlineComponent,
    CoachComponent,
    CareerComponent,
    PrivacyComponent,
    FaqComponent,
    TermsComponent,
    LoginComponent,
    RegisterComponent,
    CourseListComponent,
    ContentListComponent,
    CourseDetailsComponent,
    MentorDashboardComponent,
    StudentDashboardComponent,
    MentorStudentListComponent,
    MentorScheduleListComponent,
    MentorCompletedClassListComponent,
    MentorOngoingClassListComponent,
    MentorUpdateLinkComponent,
    StudentCourseListComponent,
    StudentClassListComponent,
    StudentPurchaseCourseListComponent,
    StudentPaymentListComponent,
    StudentAssignmentListComponent,
    StudentExamListComponent,
    StudentExamResultComponent,
    MentorAssignmentListComponent,
    MentorStudentProgressListComponent,
    QuizParticipationComponent,
    MentorProfileComponent,
    StudentClassHistoryComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    BlockUIModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    MathjaxModule.forRoot(),
    NgSelectModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
