import { Injectable } from '@angular/core';
import { Project } from '../model/project.model';
import { API_URL } from '../../app.api';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ErrorHandler } from '../../app.error-handler';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class ProjectsService {

  constructor(private http: Http) { }

  projects(): Observable<Project[]> {
    return this.http.get(`${API_URL}/projects`)
    .map(response => response.json())
    .catch(ErrorHandler.handleError);
  }

  projectById(id: string): Observable<Project> {
    return this.http.get(`${API_URL}/projects/${id}`)
    .map(response => response.json())
    .catch(ErrorHandler.handleError);
  }

  deleteProject(id: string) {
    return this.http.delete(`${API_URL}/projects/${id}`)
    .catch(ErrorHandler.handleError);
  }

  updateProject(project: Project) {
    return this.http.put(`${API_URL}/projects`, project)
    .catch(ErrorHandler.handleError);
  }

  insertProject(project: Project) {
    return this.http.post(`${API_URL}/projects`, project)
    .catch(ErrorHandler.handleError);
  }
}
