import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/Services/student.service';
import Student from 'src/app/Models/Student';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  studentDetails: Student[] = [];

  constructor(private studentService: StudentService, private router: Router) {}

  ngOnInit() {
    this.fetchStudentDetailsAll();
  }

  fetchStudentDetailsAll(): void {
    this.studentService.getData().subscribe((res) => {
      this.studentDetails = res;
    });
  }

  showStudentDetails(id?: string): void {
    this.router.navigate(['/student-detail', id]);
  }

  editStudentDetails(id: string): void{
    this.router.navigate(['/edit-detail', id]);
  }

  deleteStudentDetails(id: string): void {
    this.studentService.deleteStudentData(id).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err),

      //How to reload the page to populate the updated data
      complete: () => this.router.navigateByUrl('/'),
    });
  }
}
