import { Component, OnInit } from '@angular/core';
import { Project } from '../model/project.model';
import { ProjectsService } from '../service/projects.service';
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-project-update',
  templateUrl: './project-update.component.html'
})
export class ProjectUpdateComponent implements OnInit {

  project: Project = new Project();

  constructor(private projectService: ProjectsService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.projectService.projectById(this.route.snapshot.params['id'])
    .subscribe(project => this.project = project);
  }

  onSubmit() {
    this.projectService.updateProject(this.project)
      .subscribe(
        data => {
          this.router.navigate(['projects']);
        },
        error => {
          alert(error);
        });
  }
}
