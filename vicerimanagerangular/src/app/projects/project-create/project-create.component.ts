import { Component, OnInit } from '@angular/core';
import { Project } from '../model/project.model';
import { ProjectsService } from '../service/projects.service';
import { ActivatedRoute, Router } from '@angular/router';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html'
})
export class ProjectCreateComponent implements OnInit {

  project: Project = new Project();

  constructor(private projectService: ProjectsService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.project.Id = 0;
  }

  onSubmit() {
    this.projectService.insertProject(this.project)
      .subscribe(
        data => {
          this.router.navigate(['projects']);
        },
        error => {
          alert(error);
        });
  }
}

