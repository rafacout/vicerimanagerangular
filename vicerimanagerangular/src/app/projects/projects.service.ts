import { Injectable } from '@angular/core';
import { Project } from './project/project.model';
import { API_URL } from '../app.api';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class ProjectsService {

  constructor(private http: Http) { }

  projects(): Observable<Project[]> {
    return this.http.get(`${API_URL}/projects`)
    .map(response => response.json());
  }
}
