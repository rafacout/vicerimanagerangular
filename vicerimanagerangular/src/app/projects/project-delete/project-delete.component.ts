import { Component, OnInit } from '@angular/core';
import { Project } from '../model/project.model';
import { ProjectsService } from '../service/projects.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project-delete',
  templateUrl: './project-delete.component.html'
})
export class ProjectDeleteComponent implements OnInit {

  project: Project = new Project();
  response: string;

  constructor(private projectService: ProjectsService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.projectService.projectById(this.route.snapshot.params['id'])
    .subscribe(project => this.project = project);
  }

  deleteProject() {
    return this.projectService.deleteProject(this.route.snapshot.params['id'])
    .subscribe((data) => this.router.navigate(['projects']));
  }

}
