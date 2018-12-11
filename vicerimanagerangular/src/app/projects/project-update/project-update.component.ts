import { Component, OnInit } from '@angular/core';
import { Project } from '../model/project.model';
import { ProjectsService } from '../service/projects.service';
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-project-update',
  templateUrl: './project-update.component.html',
  styleUrls: ['./project-update.component.css']
})
export class ProjectUpdateComponent implements OnInit {

  project: Project;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private projectService: ProjectsService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      Id: [],
      IsImported: [],
      Open_Issues_Count: [],
      ProjectGitId: ['', Validators.required],
      Name: ['', Validators.required],
      Description: ['', Validators.required],
      Web_URL: ['', Validators.required]
    });

    this.projectService.projectById(this.route.snapshot.params['id'])
    .subscribe(data => this.editForm.setValue(data));
  }

  // updateProject() {
  //   this.projectService.updateProject(this.project)
  //   .subscribe((data) => this.router.navigate(['projects']));
  // }

  onSubmit() {
    this.projectService.updateProject(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['projects']);
        },
        error => {
          alert(error);
        });
  }
}
