import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../model/project.model';
import { ProjectsService } from '../service/projects.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html'
})
export class ProjectDetailComponent implements OnInit {

  project: Project = new Project();

  constructor(private projectService: ProjectsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.projectService.projectById(this.route.snapshot.params['id'])
    .subscribe(project => this.project = project);
  }

}
