import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { StudentDetailsComponent } from './Components/student-details/student-details.component';
import { AddDataComponent } from './Components/add-data/add-data.component';
import { EditDataComponent } from './Components/edit-data/edit-data.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'student-detail/:id', component: StudentDetailsComponent },
  { path: 'add-data', component: AddDataComponent },
  { path: 'edit-detail/:id', component: EditDataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
