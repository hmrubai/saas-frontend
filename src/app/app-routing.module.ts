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
        path: 'student-dashboard', 
        children: [
            {
                path: '',
                loadChildren: () => import('./student-dashboard/student-dashboard.module').then(m => m.StudentDashboardModule)
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
