import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ClassComponent } from './class/class.component';
import { AddmissionComponent } from './addmission/addmission.component';
import { AllcourseComponent } from './allcourse/allcourse.component';
import { OnlineComponent } from './online/online.component';
import { CoachComponent } from './coach/coach.component';
import { CareerComponent } from './career/career.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { FaqComponent } from './faq/faq.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CourseListComponent } from './course-list/course-list.component';

const routes: Routes = [
    { path: '', redirectTo: '/index', pathMatch: 'full' },
    { path: 'index', component: IndexComponent },
    { path: 'class', component: ClassComponent },
    { path: 'addmission', component: AddmissionComponent },
    { path: 'allcourse', component: AllcourseComponent },
    { path: 'online', component: OnlineComponent },
    { path: 'coach', component: CoachComponent },
    { path: 'career', component: CareerComponent },
    { path: 'privacy', component: PrivacyComponent },
    { path: 'terms', component: TermsComponent },
    { path: 'faq', component: FaqComponent },
    {
        path: 'login', component: LoginComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
            }
        ]
    },
    {
        path: 'course-details/:course_id', 
        children: [
            {
                path: '',
                loadChildren: () => import('./course-details/course-details.module').then(m => m.CourseDetailsModule)
            }
        ]
    },
    {
        path: 'course-list', 
        children: [
            {
                path: '',
                loadChildren: () => import('./course-list/course-list.module').then(m => m.CourseListModule)
            }
        ]
    },
    {
        path: 'course-list/:menu_id', 
        children: [
            {
                path: '',
                loadChildren: () => import('./course-list/course-list.module').then(m => m.CourseListModule)
            }
        ]
    },
    {
        path: 'content-list', 
        children: [
            {
                path: '',
                loadChildren: () => import('./content-list/content-list.module').then(m => m.ContentListModule)
            }
        ]
    },
    {
        path: 'content-list/:menu_id', 
        children: [
            {
                path: '',
                loadChildren: () => import('./content-list/content-list.module').then(m => m.ContentListModule)
            }
        ]
    },
    {
        path: 'content-subject-list/:menu_id', 
        children: [
            {
                path: '',
                loadChildren: () => import('./content-subject-list/content-subject-list.module').then(m => m.ContentSubjectListModule)
            }
        ]
    },
    {
        path: 'content-subject-details/:content_subject_id', 
        children: [
            {
                path: '',
                loadChildren: () => import('./content-subject-details/content-subject-details.module').then(m => m.ContentSubjectDetailsModule)
            }
        ]
    },
    {
        path: 'content-details/:content_id', 
        children: [
            {
                path: '',
                loadChildren: () => import('./content-details/content-details.module').then(m => m.ContentDetailsModule)
            }
        ]
    },
    {
        path: 'mentor-list', 
        children: [
            {
                path: '',
                loadChildren: () => import('./mentor-list/mentor-list.module').then(m => m.MentorListModule)
            }
        ]
    },
    {
        path: 'mentor-profile', 
        children: [
            {
                path: '',
                loadChildren: () => import('./mentor-profile/mentor-profile.module').then(m => m.MentorProfileModule)
            }
        ]
    },
    {
        path: 'mentor-student-list', 
        children: [
            {
                path: '',
                loadChildren: () => import('./mentor-student-list/mentor-student-list.module').then(m => m.MentorStudentListModule)
            }
        ]
    },
    {
        path: 'mentor-schedule-list/:mapping_id', 
        children: [
            {
                path: '',
                loadChildren: () => import('./mentor-schedule-list/mentor-schedule-list.module').then(m => m.MentorScheduleListModule)
            }
        ]
    },
    {
        path: 'mentor-completed-class-list', 
        children: [
            {
                path: '',
                loadChildren: () => import('./mentor-completed-class-list/mentor-completed-class-list.module').then(m => m.MentorCompletedClassListModule)
            }
        ]
    },
    {
        path: 'mentor-ongoing-class-list', 
        children: [
            {
                path: '',
                loadChildren: () => import('./mentor-ongoing-class-list/mentor-ongoing-class-list.module').then(m => m.MentorOngoingClassListModule)
            }
        ]
    },
    {
        path: 'mentor-update-link', 
        children: [
            {
                path: '',
                loadChildren: () => import('./mentor-update-link/mentor-update-link.module').then(m => m.MentorUpdateLinkModule)
            }
        ]
    },
    {
        path: 'student-dashboard', 
        children: [
            {
                path: '',
                loadChildren: () => import('./student-dashboard/student-dashboard.module').then(m => m.StudentDashboardModule)
            }
        ]
    },
    {
        path: 'student-course-list', 
        children: [
            {
                path: '',
                loadChildren: () => import('./student-course-list/student-course-list.module').then(m => m.StudentCourseListModule)
            }
        ]
    },
    {
        path: 'student-purchase-course-list', 
        children: [
            {
                path: '',
                loadChildren: () => import('./student-purchase-course-list/student-purchase-course-list.module').then(m => m.StudentPurchaseCourseListModule)
            }
        ]
    },
    {
        path: 'student-payment-list', 
        children: [
            {
                path: '',
                loadChildren: () => import('./student-payment-list/student-payment-list.module').then(m => m.StudentPaymentListModule)
            }
        ]
    },
    {
        path: 'student-assignment-list', 
        children: [
            {
                path: '',
                loadChildren: () => import('./student-assignment-list/student-assignment-list.module').then(m => m.StudentAssignmentListModule)
            }
        ]
    },
    {
        path: 'mentor-assignment-list', 
        children: [
            {
                path: '',
                loadChildren: () => import('./mentor-assignment-list/mentor-assignment-list.module').then(m => m.MentorAssignmentListModule)
            }
        ]
    },
    {
        path: 'mentor-student-progress-list', 
        children: [
            {
                path: '',
                loadChildren: () => import('./mentor-student-progress-list/mentor-student-progress-list.module').then(m => m.MentorStudentProgressListModule)
            }
        ]
    },
    {
        path: 'quiz-participation/:quiz_id/:result_id', 
        children: [
            {
                path: '',
                loadChildren: () => import('./quiz-participation/quiz-participation.module').then(m => m.QuizParticipationModule)
            }
        ]
    },
    {
        path: 'student-exam-list', 
        children: [
            {
                path: '',
                loadChildren: () => import('./student-exam-list/student-exam-list.module').then(m => m.StudentExamListModule)
            }
        ]
    },
    {
        path: 'student-exam-result/:result_id', 
        children: [
            {
                path: '',
                loadChildren: () => import('./student-exam-result/student-exam-result.module').then(m => m.StudentExamResultModule)
            }
        ]
    },
    {
        path: 'student-class-list', 
        children: [
            {
                path: '',
                loadChildren: () => import('./student-class-list/student-class-list.module').then(m => m.StudentClassListModule)
            }
        ]
    },
    {
        path: 'student-class-history/:schedule_id', 
        children: [
            {
                path: '',
                loadChildren: () => import('./student-class-history/student-class-history.module').then(m => m.StudentClassHistoryModule)
            }
        ]
    },
    {
        path: 'mentor-dashboard', 
        children: [
            {
                path: '',
                loadChildren: () => import('./mentor-dashboard/mentor-dashboard.module').then(m => m.MentorDashboardModule)
            }
        ]
    },
    { path: 'register', component: RegisterComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
