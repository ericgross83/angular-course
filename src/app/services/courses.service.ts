import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Course} from '../model/course';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpClinet: HttpClient) { }

  loadCourses(): Observable<Course[]> {

    const params = new HttpParams()
      .set('page', '1')
      .set('pageSize', '10');

    return this.httpClinet.get<Course[]>('/api/courses', {params});

  }

  saveCourse(course: Course) {

    const headers = new HttpHeaders().set('x-Auth', 'userId');

    return  this.httpClinet.put(`/api/courses/${course.id}`, course, {headers});
  }
}
