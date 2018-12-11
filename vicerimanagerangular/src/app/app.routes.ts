import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IssuesComponent } from './issues/issues.component';
import { AboutComponent } from './about/about.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';
import { ProjectUpdateComponent } from './projects/project-update/project-update.component';
import { ProjectDeleteComponent } from './projects/project-delete/project-delete.component';
import { ProjectCreateComponent } from './projects/project-create/project-create.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';


export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'projects', component: ProjectListComponent},
    {path: 'projects/create', component: ProjectCreateComponent},
    {path: 'projects/details/:id', component: ProjectDetailComponent},
    {path: 'projects/update/:id', component: ProjectUpdateComponent},
    {path: 'projects/delete/:id', component: ProjectDeleteComponent},
    {path: 'issues', component: IssuesComponent}
];

