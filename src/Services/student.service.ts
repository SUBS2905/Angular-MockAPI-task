import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Student from 'src/app/Models/Student';
import StudentPostData from 'src/app/Models/StudentPostData';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private apiEndpoint =
    'https://65aab9eb081bd82e1d97a81b.mockapi.io/student-details';

  constructor(private http: HttpClient) {}

  getData(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiEndpoint);
  }

  getStudentById(id: string): Observable<Student> {
    return this.http.get<Student>(`${this.apiEndpoint}/${id}`);
  }

  addStudentData(studentData: StudentPostData): Observable<Student> {
    return this.http.post<Student>(this.apiEndpoint, studentData);
  }

  editStudentDetails(studentData: StudentPostData, id: string): Observable<Student> {
    return this.http.put<Student>(`${this.apiEndpoint}/${id}`, studentData);
  }

  deleteStudentData(id: string): Observable<Student> {
    return this.http.delete<Student>(`${this.apiEndpoint}/${id}`);
  }
}
