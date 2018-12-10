import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import { ProjectsService } from './projects/projects.service';

import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { IssuesComponent } from './issues/issues.component';

import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';
import { ProjectUpdateComponent } from './projects/project-update/project-update.component';
import { ProjectCreateComponent } from './projects/project-create/project-create.component';
import { ProjectDeleteComponent } from './projects/project-delete/project-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    AboutComponent,
    HomeComponent,
    HeaderComponent,
    IssuesComponent,
    ProjectDetailComponent,
    ProjectUpdateComponent,
    ProjectCreateComponent,
    ProjectDeleteComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ProjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
