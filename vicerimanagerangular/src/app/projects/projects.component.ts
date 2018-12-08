import { Component, OnInit } from '@angular/core';
import { Project } from './project/project.model';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private projectsService: ProjectsService) { }

  projects: Project[];

  ngOnInit() {
    this.projectsService.projects()
    .subscribe(projects => this.projects = projects);
  }

}
