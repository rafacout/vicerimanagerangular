import { Component, OnInit } from '@angular/core';
import { Project } from '../model/project.model';
import { ProjectsService } from '../service/projects.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html'
})
export class ProjectListComponent implements OnInit {

  projects: Project[];

  constructor(private projectsService: ProjectsService,
              private router: Router) { }

  ngOnInit() {
    this.projectsService.projects()
    .subscribe(projects => this.projects = projects);
  }

  importProjects() {
    this.projectsService.importProjects()
    .subscribe((data) => window.location.reload());
  }
}
