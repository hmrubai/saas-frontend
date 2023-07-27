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

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent},
  { path: 'class', component: ClassComponent},
  { path: 'addmission', component: AddmissionComponent},
  { path: 'allcourse', component: AllcourseComponent},
  { path: 'online', component: OnlineComponent},
  { path: 'coach', component: CoachComponent},
  { path: 'career', component: CareerComponent},
  { path: 'privacy', component: PrivacyComponent},
  { path: 'terms', component: TermsComponent},
  { path: 'faq', component: FaqComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
