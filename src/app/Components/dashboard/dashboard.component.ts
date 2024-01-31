import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/Services/http.service';
import Student from 'src/app/Models/student';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  studentDetails: Student[] = [];

  constructor(private httpService: HttpService, private router: Router) {}

  ngOnInit(){
    this.fetchStudentDetailsAll();
  }

  fetchStudentDetailsAll(){
    this.httpService.getData().subscribe(res => {
      this.studentDetails = res;
    })
  }

  showStudentDetails(id: string) {
      this.router.navigate(['/student-detail', id]);
  }
}
