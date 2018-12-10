import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { ProjectsService } from '../projects.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-delete',
  templateUrl: './project-delete.component.html',
  styleUrls: ['./project-delete.component.css']
})
export class ProjectDeleteComponent implements OnInit {

  project: Project;

  constructor(private projectService: ProjectsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.projectService.projectById(this.route.snapshot.params['id'])
    .subscribe(project => this.project = project);
  }

}
