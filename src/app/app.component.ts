import { Component } from '@angular/core';
import { HttpService } from 'src/Services/http.service';
import Student from './Models/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular-MockAPI-Task';
  studentDetails: Student[] = [];
  constructor(private http: HttpService) {}

  ngOnInit(){
    this.http.getData().subscribe((res) => {
      this.studentDetails = res;
      // console.log(this.studentDetails);
    });
  }
  // getData() {
  // }

}
