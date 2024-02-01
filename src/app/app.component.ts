import { Component } from '@angular/core';
import { StudentService } from 'src/Services/student.service';
import Student from './Models/Student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular-MockAPI-Task';
  studentDetails: Student[] = [];
  constructor(private http: StudentService) {}

  ngOnInit(){
    this.http.getData().subscribe((res) => {
      this.studentDetails = res;
    });
  }
}
