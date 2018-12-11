import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { ProjectsService } from '../projects.service';
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css']
})
export class ProjectCreateComponent implements OnInit {

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
  }

  onSubmit() {
    this.projectService.insertProject(this.editForm.value)
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
