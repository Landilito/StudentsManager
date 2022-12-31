import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


//Declarations
import { DashboardComponent } from './dashboard/dashboard.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { GradeStudentComponent } from './grade-student/grade-student.component';


//Add ons
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';








@NgModule({
  declarations: [
    DashboardComponent,
    AttendanceComponent,
    GradeStudentComponent
  ],
  imports: [
    CommonModule,
    FeatherModule.pick(allIcons),
    NgbModule,
    NgSelectModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
