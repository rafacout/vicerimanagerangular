import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import { ProjectsService } from './projects/service/projects.service';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { IssuesComponent } from './issues/issues.component';

import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';
import { ProjectUpdateComponent } from './projects/project-update/project-update.component';
import { ProjectCreateComponent } from './projects/project-create/project-create.component';
import { ProjectDeleteComponent } from './projects/project-delete/project-delete.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    HeaderComponent,
    IssuesComponent,
    ProjectDetailComponent,
    ProjectUpdateComponent,
    ProjectCreateComponent,
    ProjectDeleteComponent,
    ProjectListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ProjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
